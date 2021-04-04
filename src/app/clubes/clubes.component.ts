import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css']
})
export class ClubesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorInicial: number = 5;
}
