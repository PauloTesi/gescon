import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Angular é top',
      autoria: "Paulo",
      modelo: 'modelo3'
    },    
    {
      conteudo: 'Passo inf para o componente filho',
      autoria: "Paulo",
      modelo: 'modelo2'
    },    
    {
      conteudo: 'Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input() Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()Minha propriedade é decorada com @Input()',
      autoria: "Paulo",
      modelo: 'modelo1'
    }  
  ];
}
