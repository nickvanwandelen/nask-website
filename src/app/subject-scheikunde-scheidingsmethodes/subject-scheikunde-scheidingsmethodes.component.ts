import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-scheikunde-scheidingsmethodes',
  templateUrl: './subject-scheikunde-scheidingsmethodes.component.html',
  styleUrls: ['./subject-scheikunde-scheidingsmethodes.component.css']
})
export class SubjectScheikundeScheidingsmethodesComponent implements OnInit {

  subjects = [
    {subject: 'introductie', show: true, showAnswers: false},
    {subject: 'zuiverestofmengsel', show: false, showAnswers: false},
    {subject: 'soortenmengsels', show: false, showAnswers: false},
    {subject: 'soortenoplossingen', show: false, showAnswers: false},
    {subject: 'oplossingenscheiden', show: false, showAnswers: false},
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
