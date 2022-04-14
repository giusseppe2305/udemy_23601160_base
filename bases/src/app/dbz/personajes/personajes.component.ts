import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DBZService } from '../services/db.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  get personajes():Personaje[] {
    return this.dbzService.personajes;
  }
    constructor(private dbzService :DBZService) { }

  ngOnInit(): void {
  }

}
