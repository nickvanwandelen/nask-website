import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-subject-natuurkunde-krachtbeweging',
  templateUrl: './subject-natuurkunde-krachtbeweging.component.html',
  styleUrls: ['./subject-natuurkunde-krachtbeweging.component.css']
})
export class SubjectNatuurkundeKrachtbewegingComponent implements OnInit {

  subjects = [
    {subject: 'introductie', show: true, showAnswers: false},
    {subject: 'krachten', show: false, showAnswers: false},
    {subject: 'vormveranderen', show: false, showAnswers: false},
    {subject: 'krachtentekenen', show: false, showAnswers: false},
    {subject: 'soortenkrachten', show: false, showAnswers: false},
    {subject: 'zwaartekrachtberekenen', show: false, showAnswers: false},
    {subject: 'effectkracht', show: false, showAnswers: false},
    {subject: 'soortenbewegingen', show: false, showAnswers: false},
    {subject: 'snelheidberekenen', show: false, showAnswers: false},
    {subject: 'versnellingberekenen', show: false, showAnswers: false},
    {subject: 'omrekenen', show: false, showAnswers: false},
    {subject: 'practica', show: false, showAnswers: false}
  ];

  constructor(){}

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

