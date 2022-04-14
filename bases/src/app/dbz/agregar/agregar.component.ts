import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DBZService } from '../services/db.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {


  public nuevo:Personaje ={
    nombre:'',
    power : 0
  };

  constructor(private dbzService :DBZService) { }

 
  ngOnInit(): void {
  }

  public agregarPersonaje(){
    this.dbzService.agregarPersonaje({...this.nuevo});
  }

}
