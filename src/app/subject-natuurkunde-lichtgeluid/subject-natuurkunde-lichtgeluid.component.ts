import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-natuurkunde-lichtgeluid',
  templateUrl: './subject-natuurkunde-lichtgeluid.component.html',
  styleUrls: ['./subject-natuurkunde-lichtgeluid.component.css']
})
export class SubjectNatuurkundeLichtgeluidComponent implements OnInit {

  subjects = [
    {subject: 'introductie', show: true, showAnswers: false},
    {subject: 'voorwerpenzien', show: false, showAnswers: false},
    {subject: 'spiegelbeeldtekenen', show: false, showAnswers: false},
    {subject: 'lenzen', show: false, showAnswers: false},
    {subject: 'lenzenmensen', show: false, showAnswers: false},
    {subject: 'tekenenbollelens', show: false, showAnswers: false},
    {subject: 'lenzenformule', show: false, showAnswers: false},
    {subject: 'vergrotingberekenen', show: false, showAnswers: false},
    {subject: 'kleurenzien', show: false, showAnswers: false},
    {subject: 'kleurenmengen', show: false, showAnswers: false},
    {subject: 'spectrumlicht', show: false, showAnswers: false},
    {subject: 'geluid', show: false, showAnswers: false},
    {subject: 'soortentonen', show: false, showAnswers: false},
    {subject: 'geluidmeten', show: false, showAnswers: false},
    {subject: 'practica', show: false, showAnswers: false},
  ]

  constructor() { }

  ngOnInit() {
  }

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
}
