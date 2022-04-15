import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit {

  @Output() buscar = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  debauncer: Subject<string> = new Subject();

  public txtBuscar: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debauncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      })
  }

  public search() {
    this.buscar.emit(this.txtBuscar);
  }

  teclaPresionada() {
    this.debauncer.next(this.txtBuscar);
  }
}
