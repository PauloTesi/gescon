import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';



@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  
  constructor (
    private service: PensamentoService,
    private router: Router
    ) { }

    pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }


  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
  
}
