import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tablapaises',
  templateUrl: './tablapaises.component.html',
  styleUrls: ['./tablapaises.component.scss']
})
export class TablapaisesComponent implements OnInit {

  @Input() paises: Pais[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
