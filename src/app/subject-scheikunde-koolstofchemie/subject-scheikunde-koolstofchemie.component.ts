import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-scheikunde-koolstofchemie',
  templateUrl: './subject-scheikunde-koolstofchemie.component.html',
  styleUrls: ['./subject-scheikunde-koolstofchemie.component.css']
})
export class SubjectScheikundeKoolstofchemieComponent implements OnInit {

  subjects = [
    {subject: 'introductie', show: true},
    {subject: 'fossielebrandstoffen', show: false},
    {subject: 'fotosynthese', show: false},
    {subject: 'aardolieraffinaderij', show: false},
    {subject: 'opbouw_moleculen', show: false},
    {subject: 'naamgeving_koolwaterstoffen', show: false},
    {subject: 'halogeenalkanen', show: false},
    {subject: 'kunststoffen', show: false},
    {subject: 'thermohardersplasten', show: false},
    {subject: 'monopolymeer', show: false},
    {subject: 'practica', show: false, showAnswers: false}
  ];

  constructor() { }

  handleViewSubject(subject: string){
    for(let index = 0; index < this.subjects.length; index++){
      if(this.subjects[index].subject === subject){
        this.subjects[index].show = !this.subjects[index].show;
      }
    }
  }

  getShowSubject(subject: string){
    for(let index = 0; index < this.subjects.length; index++){
      if(this.subjects[index].subject === subject){
        return this.subjects[index].show;
      }
    }
  }

  ngOnInit() {
  }



}
