import { Component } from "@angular/core";
import { Pensamento } from "./../pensamento";
import { PensamentoService } from "../pensamento.service";

@Component({
  selector: "app-listar-pensamento",
  templateUrl: "./listar-pensamento.component.html",
  styleUrls: ["./listar-pensamento.component.css"],
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  constructor(private service: PensamentoService) {}

  haMaisPensamentos: boolean = true;
  filtro: string = "";

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  carregarMaisPensamentos() {
    this.service
      .listar(++this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service
      .listar(this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }
}
