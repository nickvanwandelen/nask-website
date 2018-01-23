import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-scheikunde-reactievergelijkingen',
  templateUrl: './subject-scheikunde-reactievergelijkingen.component.html',
  styleUrls: ['./subject-scheikunde-reactievergelijkingen.component.css']
})
export class SubjectScheikundeReactievergelijkingenComponent implements OnInit {

  subjects = [
    {subject: 'chemischereactie', show: true, showAnswers: false},
    {subject: 'behoudmassa', show: false, showAnswers: false},
    {subject: 'endoexotherm', show: false, showAnswers: false},
    {subject: 'reactievergelijkingen', show: false, showAnswers: false},
    {subject: 'reactiesnelheid', show: false, showAnswers: false},
    {subject: 'deeltjesmodel', show: false, showAnswers: false},
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
