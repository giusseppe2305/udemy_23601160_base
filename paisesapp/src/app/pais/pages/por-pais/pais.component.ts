import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit {

  hayError: boolean = false;
  paises: Pais[] = [];
  query: string = '';
  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
  }

  public buscarPais(query: string) {
    this.hayError = false;
    console.log('llega');

    this.paisService.buscarPorPais(query)
      .subscribe({
        next: (val) => this.paises = val,
        error: (error) => {
          this.query = query;
          this.hayError = true;
          this.paises = []
        },
        complete: () => { console.log('termino') },
      }
      );
  }

  sugerencias(query:string){
    this.hayError = false;
  }
}

