import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GifService } from '../../gifs/services/gif.service';
import { ShareService } from '../../gifs/services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  get historial (){
   return this.gifService.historial;
  }
  constructor(private gifService: GifService,
    private shareService: ShareService) { }
 
  ngOnInit(): void {
  }

  buscar(query: string) {
    console.log('entra buscar sidebar');
    
     this.shareService.pasarBusqueda(query);
  }
}
