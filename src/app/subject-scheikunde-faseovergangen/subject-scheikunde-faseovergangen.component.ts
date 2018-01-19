import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-scheikunde-faseovergangen',
  templateUrl: './subject-scheikunde-faseovergangen.component.html',
  styleUrls: ['./subject-scheikunde-faseovergangen.component.css']
})
export class SubjectScheikundeFaseovergangenComponent implements OnInit {

  subjects = [
    {subject: 'introductie', show: true},
    {subject: 'fasen', show: true},
    {subject: 'faseovergangen', show: false},
    {subject: 'practica', show: false, showAnswers: false}
  ];

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

}
