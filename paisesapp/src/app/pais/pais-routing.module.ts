import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './pages/por-region/region.component';
import { CapitalComponent } from './pages/por-capital/capital.component';
import { PaisComponent } from './pages/por-pais/pais.component';
import { VisualizacionComponent } from './components/visualizacion/visualizacion.component';


const routes: Routes = [
  { path: 'region', component: RegionComponent },
  { path: 'capital', component: CapitalComponent },
  { path: 'pais', component: PaisComponent },
  { path: 'ver', component: VisualizacionComponent },
  { path: '', redirectTo:'/pais' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule { }
