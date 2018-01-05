import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-page-toetsen-generated',
  templateUrl: './page-toetsen-generated.component.html',
  styleUrls: ['./page-toetsen-generated.component.css']
})
export class PageToetsenGeneratedComponent implements OnInit {

  generated = false;
  called = false;

  natuurkundeSubjects: any;
  scheikundeSubjects: any;

  constructor(private afs: AngularFirestore){
    this.natuurkundeSubjects = [];
    this.scheikundeSubjects = [];
  }

  generateTest(natSubjects, schSubjects){
    this.called = true;
    this.generated = false;

    this.natuurkundeSubjects = [];
    this.scheikundeSubjects = [];

    let localNatSubjectContainer = this.natuurkundeSubjects; //create local array
    let localSchSubjectContainer = this.scheikundeSubjects;



    for(let subject = 0; subject < natSubjects.length; subject++){ //loop through selected subjects
      console.log('Retrieving subject: ' + natSubjects[subject].subject + ' from database'); //debug

      var natReference = this.afs.collection('natuurkunde').doc(natSubjects[subject].subject).collection('vragen'); //create a database reference of the selected subject
      natReference.ref.get().then(function(returnedCollection){

        var natSubjectContainer = { //create a subject container, containing the name and questions
          subject: natSubjects[subject].subject,
          questions: []
        };

        returnedCollection.forEach(function(document){ //loop through each question and push them in the subject container
          console.log(document.id, " =>", document.data());
          natSubjectContainer.questions.push(document.data())
        });

        localNatSubjectContainer.push(natSubjectContainer); //push the subject container in the natSubjectContainer object
      });
    }

    for(let subject = 0; subject < schSubjects.length; subject++){ //loop through selected subjects
      console.log('Retrieving subject: ' + schSubjects[subject].subject + ' from database'); //debug

      let schReference = this.afs.collection('scheikunde').doc(schSubjects[subject].subject).collection('vragen'); //create a database reference of the selected subject
      schReference.ref.get().then(function(returnedCollection){

        let schSubjectContainer = { //create a subject container, containing the name and questions
          subject: schSubjects[subject].subject,
          questions: []
        };

        returnedCollection.forEach(function(document){ //loop through each question and push them in the subject container
          console.log(document.id, " =>", document.data());
          schSubjectContainer.questions.push(document.data())
        });

        localSchSubjectContainer.push(schSubjectContainer); //push the subject container in the natSubjectContainer object
      });
    }

    this.generated = true;
    console.log(this.natuurkundeSubjects);
    console.log(this.scheikundeSubjects);
  }

  ngOnInit() {
  }

  pushData(){
    console.log(this.natuurkundeSubjects);
    console.log(this.scheikundeSubjects);
  }

}
