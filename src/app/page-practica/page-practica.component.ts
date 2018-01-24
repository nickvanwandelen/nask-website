import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-practica',
  templateUrl: './page-practica.component.html',
  styleUrls: ['./page-practica.component.css']
})
export class PagePracticaComponent implements OnInit {

  practica = [
    {practicum: 'elektriciteit', show: false},
    {practicum: 'geluid', show: false},
    {practicum: 'krachtbeweging', show: false},
    {practicum: 'licht', show: false},
    {practicum: 'dichtheid', show: false},
    {practicum: 'faseovergangen', show: false},
    {practicum: 'koolstofchemie', show: false},
    {practicum: 'scheidingsmethodes', show: false},
  ];

  constructor() { }

  handleShowPracticum(practicumToShow: string){
    for(let index = 0; index < this.practica.length; index++){
      if(this.practica[index].practicum === practicumToShow){
        this.practica[index].show = !this.practica[index].show;
      }
    }
  }

  getShouldShowPracticum(practicumToShow: string){
    for(let index = 0; index < this.practica.length; index++){
      if(this.practica[index].practicum === practicumToShow){
        return this.practica[index].show;
      }
    }
  }

  ngOnInit() {
  }

}
