import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { clubes } from '../model/clubes'
import { treinadores } from '../model/treinadores';



@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor!: number;
  exibeTabela:  boolean = false;
  exibeTabela1: boolean = false;

  listaClubes: clubes[] = [
    { nome: 'Palmeiras', titulos: '10', estado: 'São Paulo', pais: 'Brasil' },
    { nome: 'Real Madrid', titulos: '30', estado: 'Madrid', pais: 'Espanha' },
    { nome: 'Liverpool', titulos: '8', estado: 'Liverpool', pais: 'Inglaterra' },
    { nome: 'Bayern Munique', titulos: '20', estado: 'Munique', pais: 'Alemanha' },
  ];

  listaTreinadores: treinadores[] = [
    { nome: 'Abel Ferreira', clube:'Palmeiras' },
    { nome: 'Zinedine Zidane', clube:'Real Madrid' },
    { nome: 'Jurgen Klopp', clube:'Liverpool' },
    { nome: 'Hans Dieter Flick', clube:'Bayern Munique' },
  ];

  displayedColumns: string[] = ['Nome', 'Títulos', 'Estado', 'País'];
  displayedColumns1: string[] = ['Nome', 'Clube'];

  ngOnInit(): void {
    this.valor = 10;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

  exibirTabela1(){
    this.exibeTabela1 = true;
  }
}
