import { Component, OnDestroy, OnInit } from '@angular/core';

import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  public regiones = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
  ]
  public paises: Pais[] = [];

  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {

  }


  public buscarRegion(region: string) {
    this.paisService.buscarPorRegion(region)
    .subscribe(paises=> this.paises=paises);
  }

  
}
