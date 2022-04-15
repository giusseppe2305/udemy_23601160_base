import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent implements OnInit {

  public paises: Pais[] = [];
  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
  }

  public buscarCapital(query:string) {
    this.paisService.buscarPorCapital(query)
    .subscribe(paises=>this.paises=paises);
  }
}
