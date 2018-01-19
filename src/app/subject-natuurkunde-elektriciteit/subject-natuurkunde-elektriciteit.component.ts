import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-natuurkunde-elektriciteit',
  templateUrl: './subject-natuurkunde-elektriciteit.component.html',
  styleUrls: ['./subject-natuurkunde-elektriciteit.component.css']
})
export class SubjectNatuurkundeElektriciteitComponent implements OnInit {

  subjects = [
    {subject: 'introductie', show: true},
    {subject: 'lading', show: false},
    {subject: 'geleidersisolatoren', show: false},
    {subject: 'energieopwekken', show: false},
    {subject: 'groeneenergie', show: false},
    {subject: 'stroominhuis', show: false},
    {subject: 'soortenstroomkringen', show: false},
    {subject: 'stroomsterkte', show: false},
    {subject: 'spanning', show: false},
    {subject: 'weerstand', show: false},
    {subject: 'vermogen', show: false},
    {subject: 'kilowattuur', show: false},
    {subject: 'stroomsterktespanningmeten', show: false},
    {subject: 'stroomsterktemeten', show: false},
    {subject: 'practica', show: false}
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
