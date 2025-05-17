import { Component } from '@angular/core';
import { EstoqueComponent } from './estoque/estoque.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EstoqueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_stock';
}
