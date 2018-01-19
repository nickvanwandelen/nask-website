import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-scheikunde-dichtheid',
  templateUrl: './subject-scheikunde-dichtheid.component.html',
  styleUrls: ['./subject-scheikunde-dichtheid.component.css']
})
export class SubjectScheikundeDichtheidComponent implements OnInit {

  subjects = [
    {subject: 'introductie', show: true, showAnswers: false}
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
