import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {AngularFireModule} from 'angularfire2';

@Component({
  selector: 'app-page-toetsen-home',
  templateUrl: './page-toetsen-home.component.html',
  styleUrls: ['./page-toetsen-home.component.css']
})
export class PageToetsenHomeComponent implements OnInit {


  natuurkundeSubjects: any;
  scheikundeSubjects: any;


  constructor() {
    this.natuurkundeSubjects = [
      {subject: 'Elektriciteit', selected: false},
      {subject: 'Krachten', selected: false},
    ];

    this.scheikundeSubjects = [
      {subject: 'Koolstofchemie', selected: false},
      {subject: 'Periodiek systeem', selected: false},
      {subject: 'Scheidingsmethodes', selected: false}
    ];

  }

  ngOnInit() {
  }

  generateTests(testComponent){
    var natSubjects = [];
    var schSubjects = [];

    for(var i = 0; i < this.natuurkundeSubjects.length; i++){
      if(this.natuurkundeSubjects[i].selected){
        natSubjects.push(this.natuurkundeSubjects[i]);
      }
    }

    for(var j = 0; j < this.scheikundeSubjects.length; j++){
      if(this.scheikundeSubjects[j].selected){
        schSubjects.push(this.scheikundeSubjects[j]);
      }
    }

    testComponent.generateTest(natSubjects, schSubjects);
    window.scrollTo(0, testComponent.offsetTop);
  }

}
