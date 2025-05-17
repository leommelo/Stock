import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})

export class EstoqueComponent {
  item = { nome: '', categoria: '', quantidade: 0, precoUnitario: 0 };
  itens: any[] = [];

  showConfirm = false;
  itemToDelete: any = null;
  editMode = false;
  itemToEdit: any = null;
  indexToEdit: number | null = null;

  constructor(private http: HttpClient) { }

  salvar() {
    this.http.post('http://localhost:5023/api/produto', this.item)
      .subscribe({
        next: (res: any) => {
          // Adiciona o item retornado pela API, que já tem o id
          this.itens.push(res);
          this.item = { nome: '', categoria: '', quantidade: 0, precoUnitario: 0 };
        },
        error: (err) => {
          alert('Erro ao salvar item!');
          console.error(err);
        }
      });
  }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5023/api/produto')
      .subscribe({
        next: (res) => {
          this.itens = res;
        },
        error: (err) => {
          alert('Erro ao carregar itens!');
          console.error(err);
        }
      });
  }

  confirmarDelete(item: any) {
    this.showConfirm = true;
    this.itemToDelete = item;
  }

  cancelarDelete() {
    this.showConfirm = false;
    this.itemToDelete = null;
  }

  deletarItem() {
    if (!this.itemToDelete || !this.itemToDelete.id) {
      alert('ID do item não encontrado!');
      this.cancelarDelete();
      return;
    }

    this.http.delete(`http://localhost:5023/api/produto/${this.itemToDelete.id}`)
      .subscribe({
        next: () => {
          this.itens = this.itens.filter(i => i.id !== this.itemToDelete.id);
          this.cancelarDelete();
        },
        error: (err) => {
          alert('Erro ao deletar item!');
          console.error(err);
          this.cancelarDelete();
        }
      });
  }

  abrirModalEdicao(item: any) {
    this.editMode = true;
    this.itemToEdit = { ...item };
    this.indexToEdit = this.itens.indexOf(item);
  }

  cancelarEdicao() {
    this.editMode = false;
    this.itemToEdit = null;
    this.indexToEdit = null;
  }

  salvarEdicao() {
    if (!this.itemToEdit || !this.itemToEdit.id) {
      alert('ID do item não encontrado!');
      this.cancelarEdicao();
      return;
    }

    this.http.put(`http://localhost:5023/api/produto/${this.itemToEdit.id}`, this.itemToEdit)
      .subscribe({
        next: (res: any) => {
          // Atualiza o item na lista local pelo id
          this.itens = this.itens.map(i =>
            i.id === this.itemToEdit.id ? { ...this.itemToEdit } : i
          );
          this.cancelarEdicao();
        },
        error: (err) => {
          alert('Erro ao editar item!');
          console.error(err);
          this.cancelarEdicao();
        }
      });
  }
}
