import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/personaje.interface';

@Injectable()
export class DBZService{

    private _personajes: Personaje[] = [
        { nombre: 'Goku', power: 15000 }
    ];

    get personajes() : Personaje[]{
        return [...this._personajes];
    }

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
        
    }
}