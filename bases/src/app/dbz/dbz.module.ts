import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormsModule } from '@angular/forms';
import { DBZService } from './services/db.service';



@NgModule({
  declarations: [
    AgregarComponent,
    PersonajesComponent,
    MainpageComponent
  ],
  exports : [
    MainpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    DBZService
  ]
})
export class DbzModule { }
