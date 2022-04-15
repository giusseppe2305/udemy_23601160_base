import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Pais } from '../interfaces/pais.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  

  constructor(private httpClient: HttpClient) { }

  public buscarPorRegion(region: string) {
    return this.httpClient.get<Pais[]>(`${environment.apiPaisesUrl}/region/${region}`);
      
  }

  public buscarPorCapital(capital:string){
   return this.httpClient.get<Pais[]>(`${environment.apiPaisesUrl}/capital/${capital}`);
  }

  public buscarPorPais(pais:string){
    return this.httpClient.get<Pais[]>(`${environment.apiPaisesUrl}/name/${pais}`);
   }
 
}
