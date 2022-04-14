import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DBZService } from '../services/db.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }


}
