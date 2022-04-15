import { Component, Input, OnInit } from '@angular/core';
import { IGif } from '@giphy/js-types';
import { filter } from 'rxjs';
import { ShareService } from '../services/shared.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: ['.card-img-top{height: 20vh;  object-fit: cover;}'
  ]
})
export class ResultadosComponent implements OnInit {

  @Input()  public resultados: IGif[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
