import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-visualizacion',
  templateUrl: './visualizacion.component.html',
  styleUrls: ['./visualizacion.component.scss']
})
export class VisualizacionComponent implements OnInit {

  pais!:Pais ;

  constructor(private paisService:PaisesService,
    private router:Router) { }

  ngOnInit(): void {
    this.pais = history.state.data;
  }

}
