import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaisComponent } from './pages/por-pais/pais.component';
import { RegionComponent } from './pages/por-region/region.component';
import { CapitalComponent } from './pages/por-capital/capital.component';
import { TablapaisesComponent } from './components/tablapaises/tablapaises.component';
import { VisualizacionComponent } from './components/visualizacion/visualizacion.component';
import { PaisRoutingModule } from './pais-routing.module';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    PaisComponent,
    RegionComponent,
    CapitalComponent,
    TablapaisesComponent,
    VisualizacionComponent,
    PaisInputComponent
  ],
  exports: [PaisRoutingModule],
  imports: [
    PaisRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PaisModule { }
