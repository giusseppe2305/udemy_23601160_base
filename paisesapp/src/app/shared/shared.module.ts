import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { PaisRoutingModule } from '../pais/pais-routing.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent
  ] ,
  imports: [
    AppRoutingModule,
    PaisRoutingModule,
    CommonModule
  ]
})
export class SharedModule { }
