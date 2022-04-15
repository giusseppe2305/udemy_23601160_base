import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor() { }

  @Output() onSearchGif = new EventEmitter<string>();
  
  ngOnInit(): void {
  }

   buscar() {
    console.log(this.txtBuscar.nativeElement.value);
    this.onSearchGif.emit(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = '';
  }
}
