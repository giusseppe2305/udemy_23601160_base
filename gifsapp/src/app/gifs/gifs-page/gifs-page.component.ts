import { Component, OnInit } from '@angular/core';
import { GifService } from '../services/gif.service';
import { IGif } from '@giphy/js-types';
import { filter } from 'rxjs';
import { ShareService } from '../services/shared.service';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styles: [
  ]
})
export class GifsPageComponent implements OnInit {

  public results: IGif[] = [];
  
  constructor(private gifService: GifService,
    private shareService:ShareService) { }

  ngOnInit(): void {
    this.shareService.searchEvent$
    .pipe(
      filter( resp=> { return (resp !== null && resp !== '')})
    ).subscribe( query=> this.buscarGif(query) )
  }

  buscarGif(value:string){
    this.gifService.buscarGif(value)
    .then( result=> this.results= result.data)
    .catch( error=> alert('fallo al buscar en api gifs'));
  }
}
