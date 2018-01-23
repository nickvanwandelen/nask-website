import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-scheikunde-koolstofchemie',
  templateUrl: './subject-scheikunde-koolstofchemie.component.html',
  styleUrls: ['./subject-scheikunde-koolstofchemie.component.css']
})
export class SubjectScheikundeKoolstofchemieComponent implements OnInit {

  subjects = [
    {subject: 'fossielebrandstoffen', show: true, showAnswers: false},
    {subject: 'fotosynthese', show: false, showAnswers: false},
    {subject: 'aardolieraffinaderij', show: false, showAnswers: false},
    {subject: 'opbouw_moleculen', show: false, showAnswers: false},
    {subject: 'naamgeving_koolwaterstoffen', show: false, showAnswers: false},
    {subject: 'halogeenalkanen', show: false, showAnswers: false},
    {subject: 'kunststoffen', show: false, showAnswers: false},
    {subject: 'thermohardersplasten', show: false, showAnswers: false},
    {subject: 'monopolymeer', show: false, showAnswers: false},
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

  handleShowAnswers(subject: string){
    for(let index = 0; index < this.subjects.length; index++){
      if(this.subjects[index].subject === subject){
        this.subjects[index].showAnswers = !this.subjects[index].showAnswers;
      }
    }
  }

  getShowAnswers(subject: string){
    for(let index = 0; index < this.subjects.length; index++){
      if(this.subjects[index].subject === subject){
        return this.subjects[index].showAnswers;
      }
    }
  }

  ngOnInit() {
  }



}
