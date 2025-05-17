import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {
  item = {
    nome: '',
    categoria: '',
    quantidade: 0,
    precoUnitario: 0
  };

  itens: any[] = [];

  salvar() {
    this.itens.push({ ...this.item });
    this.item = { nome: '', categoria: '', quantidade: 0, precoUnitario: 0 };
  }
}
