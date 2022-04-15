import { BehaviorSubject } from "rxjs"
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShareService {
    public behaviourSearch = new BehaviorSubject<string>('');
    public searchEvent$ = this.behaviourSearch.asObservable();
    
    public pasarBusqueda(value:string){

        this.behaviourSearch.next(value);
    }
}