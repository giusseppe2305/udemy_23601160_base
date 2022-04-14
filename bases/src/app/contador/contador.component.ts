import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl : './contador.component.html'

})
export class ContadorComponent{

    public valSumar:number = 0;
    public sumatorio:number = 0;


    public sumar(valor:number) :void{
        this.sumatorio += valor;
    }
}