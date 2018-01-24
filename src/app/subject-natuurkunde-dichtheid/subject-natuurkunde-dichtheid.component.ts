import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-natuurkunde-dichtheid',
  templateUrl: './subject-natuurkunde-dichtheid.component.html',
  styleUrls: ['./subject-natuurkunde-dichtheid.component.css']
})
export class SubjectNatuurkundeDichtheidComponent implements OnInit {

  subjects = [
    {subject: 'introductie', show: true, showAnswers: false},
    {subject: 'dichtheidberekenen', show: false, showAnswers: false},
    {subject: 'berekeningenopschrijven', show: false, showAnswers: false},
    {subject: 'formuleomvormen', show: false, showAnswers: false},
    {subject: 'onderdompelmethode', show: false, showAnswers: false},
    {subject: 'oefenopdrachten', show: false, showAnswers: false},
    {subject: 'appletdichtheid', show: false, showAnswers: false},
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
