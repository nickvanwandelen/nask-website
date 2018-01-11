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
  showFinalScore = false;

  countCorrect: number;
  countIncorrect: number;
  percentageCorrect: string;
  grade: string;

  natuurkundeSubjects: any;
  scheikundeSubjects: any;

  constructor(private afs: AngularFirestore){
    this.natuurkundeSubjects = [];
    this.scheikundeSubjects = [];
  }

  generateTest(natSubjects, schSubjects){
    this.called = true;
    this.generated = false;
    this.showFinalScore = false;

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
          natSubjectContainer.questions.push({questionID: document.id, question: document.data()})
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
          schSubjectContainer.questions.push({questionID: document.id, question: document.data()});
        });

        localSchSubjectContainer.push(schSubjectContainer); //push the subject container in the natSubjectContainer object
      });
    }

    this.generated = true;

  }

  ngOnInit() {
  }

  getRandomizedPossibleAwnsers(all_awnsers: any){
    let randomizedArray = [];

    for(let wrongAwnserIndex = 0; wrongAwnserIndex < all_awnsers.FoutieveAntwoorden.length; wrongAwnserIndex++){
      randomizedArray.push(all_awnsers.FoutieveAntwoorden[wrongAwnserIndex]);
    }
    randomizedArray.push(all_awnsers.Antwoord);

    for (var i = randomizedArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = randomizedArray[i];
      randomizedArray[i] = randomizedArray[j];
      randomizedArray[j] = temp;
    }

    return randomizedArray;
  }

  submitTest(){
    let submittedAwnsers = [];

    for(let nat_subject = 0; nat_subject < this.natuurkundeSubjects.length; nat_subject++){
      for(let nat_question = 0; nat_question < this.natuurkundeSubjects[nat_subject].questions.length; nat_question++){
        if(this.natuurkundeSubjects[nat_subject].questions[nat_question].question.Type === "open"){
          submittedAwnsers.push({
            input: document.getElementById("nat_open_" + this.natuurkundeSubjects[nat_subject].questions[nat_question].questionID),
            questionContext: this.natuurkundeSubjects[nat_subject].questions[nat_question]
          });
        }
        else{
          submittedAwnsers.push({
            input: document.getElementById("nat_mpc_" + this.natuurkundeSubjects[nat_subject].questions[nat_question].questionID),
            questionContext: this.natuurkundeSubjects[nat_subject].questions[nat_question]
          });
        }
      }
    }

    for(let sch_subject = 0; sch_subject < this.scheikundeSubjects.length; sch_subject++){
      for(let sch_question = 0; sch_question < this.scheikundeSubjects[sch_subject].questions.length; sch_question++){
        if(this.scheikundeSubjects[sch_subject].questions[sch_question].question.Type === "open"){
          submittedAwnsers.push({
            input: document.getElementById("sch_open_" + this.scheikundeSubjects[sch_subject].questions[sch_question].questionID),
            questionContext: this.scheikundeSubjects[sch_subject].questions[sch_question]
          });
        }
        else{
          submittedAwnsers.push({
            input: document.getElementById("sch_mpc_" + this.scheikundeSubjects[sch_subject].questions[sch_question].questionID),
            questionContext: this.scheikundeSubjects[sch_subject].questions[sch_question]
          });
        }
      }
    }

    this.countCorrect = 0;
    this.countIncorrect = submittedAwnsers.length;

    for(let questionToCheck = 0; questionToCheck < submittedAwnsers.length; questionToCheck++){
      if(submittedAwnsers[questionToCheck].questionContext.question.Type === "open"){
        if(("" + submittedAwnsers[questionToCheck].input.value).toUpperCase() === ("" + submittedAwnsers[questionToCheck].questionContext.question.Antwoord).toUpperCase()){
          this.countCorrect++;
          this.countIncorrect--;
          submittedAwnsers[questionToCheck].input.style.color = "#00FF00";
        }
        else{
          submittedAwnsers[questionToCheck].input.style.color = "#FF0000";
        }
        submittedAwnsers[questionToCheck].input.disabled = true;
      }
      else if(submittedAwnsers[questionToCheck].questionContext.question.Type === "mpc"){
        //console.log(submittedAwnsers[questionToCheck].input.val());
      }

    }

    console.log('Calculating scores');
    this.percentageCorrect = (this.countCorrect / (this.countCorrect + this.countIncorrect) * 100).toFixed(2);
    this.grade = (this.countCorrect / (this.countCorrect + this.countIncorrect) * 9 + 1).toFixed(1);

    this.showFinalScore = true;
  }

  pushData(){
    console.log('krachten:' + this.natuurkundeSubjects[0].questions);
    console.log(this.natuurkundeSubjects);
    console.log(this.scheikundeSubjects);
  }

}
