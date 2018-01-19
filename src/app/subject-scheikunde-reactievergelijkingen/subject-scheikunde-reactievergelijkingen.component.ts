import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-scheikunde-reactievergelijkingen',
  templateUrl: './subject-scheikunde-reactievergelijkingen.component.html',
  styleUrls: ['./subject-scheikunde-reactievergelijkingen.component.css']
})
export class SubjectScheikundeReactievergelijkingenComponent implements OnInit {

  subjects = [
    {subject: 'introductie', show: true},
    {subject: 'chemischereactie', show: false},
    {subject: 'behoudmassa', show: false},
    {subject: 'endoexotherm', show: false},
    {subject: 'reactievergelijkingen', show: false},
    {subject: 'reactiesnelheid', show: false},
    {subject: 'deeltjesmodel', show: false},
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
