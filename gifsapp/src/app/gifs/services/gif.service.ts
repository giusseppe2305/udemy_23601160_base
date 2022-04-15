import { Injectable } from '@angular/core';
import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _historial: string[] = [];
  private gf: GiphyFetch;
  get historial(){
    return [...this._historial];
  }
  constructor() {
    this.gf = new GiphyFetch(environment.apikeygif);
  }

  buscarGif(query: string): Promise<GifsResult> {
    this.addHistorial(query)

    return this.gf.search(query);
  }
  addHistorial(query: string) {
    if(!this._historial.includes(query)){
      if (this._historial.length === 7) {
        this._historial.pop();
      }
      this._historial.unshift(query);
    }
  }
}
