import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-natuurkunde-elektriciteit',
  templateUrl: './subject-natuurkunde-elektriciteit.component.html',
  styleUrls: ['./subject-natuurkunde-elektriciteit.component.css']
})
export class SubjectNatuurkundeElektriciteitComponent implements OnInit {

  subjects = [
    {subject: 'lading', show: true, showAnswers: false},
    {subject: 'elektriciteit', show: false, showAnswers: false},
    {subject: 'geleidersisolatoren', show: false, showAnswers: false},
    {subject: 'energieopwekken', show: false, showAnswers: false},
    {subject: 'groeneenergie', show: false, showAnswers: false},
    {subject: 'stroominhuis', show: false, showAnswers: false},
    {subject: 'soortenstroomkringen', show: false, showAnswers: false},
    {subject: 'stroomsterkte', show: false, showAnswers: false},
    {subject: 'spanning', show: false, showAnswers: false},
    {subject: 'weerstand', show: false, showAnswers: false},
    {subject: 'vermogen', show: false, showAnswers: false},
    {subject: 'kilowattuur', show: false, showAnswers: false},
    {subject: 'stroomsterktespanningmeten', show: false, showAnswers: false},
    {subject: 'stroomsterktemeten', show: false, showAnswers: false},
    {subject: 'applets', show: false, showAnswers: false},
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
