import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {MatRadioChange} from '@angular/material';

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

  submittedMpcAnswers: any;

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
    this.submittedMpcAnswers = [];

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
          natSubjectContainer.questions.push({questionID: document.id, question: document.data(), randomized_answers: []})
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
          schSubjectContainer.questions.push({questionID: document.id, question: document.data(), randomized_answers: []});
        });

        localSchSubjectContainer.push(schSubjectContainer); //push the subject container in the natSubjectContainer object
      });
    }

    this.generated = true;

  }

  ngOnInit() {
  }

  getRandomizedPossibleAwnsers(questionObject: any){

    if(questionObject.randomized_answers.length === 0){

      for(let wrongAwnserIndex = 0; wrongAwnserIndex < questionObject.question.FoutieveAntwoorden.length; wrongAwnserIndex++){
        questionObject.randomized_answers.push(questionObject.question.FoutieveAntwoorden[wrongAwnserIndex]);
      }
      questionObject.randomized_answers.push(questionObject.question.Antwoord);

      for (var i = questionObject.randomized_answers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = questionObject.randomized_answers[i];
        questionObject.randomized_answers[i] = questionObject.randomized_answers[j];
        questionObject.randomized_answers[j] = temp;
      }

    }

    return questionObject.randomized_answers;
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
      }
    }

    this.countCorrect = 0;
    this.countIncorrect = submittedAwnsers.length + this.submittedMpcAnswers.length;

    for(let questionToCheck = 0; questionToCheck < submittedAwnsers.length; questionToCheck++) {
      if (submittedAwnsers[questionToCheck].questionContext.question.Type === "open") {
        if (("" + submittedAwnsers[questionToCheck].input.value).toUpperCase() === ("" + submittedAwnsers[questionToCheck].questionContext.question.Antwoord).toUpperCase()) {
          this.countCorrect++;
          this.countIncorrect--;
          submittedAwnsers[questionToCheck].input.style.color = "#00FF00";
        }
        else {
          submittedAwnsers[questionToCheck].input.style.color = "#FF0000";
        }
        submittedAwnsers[questionToCheck].input.disabled = true;
      }
    }

    for(let mpcQuestionToCheck = 0; mpcQuestionToCheck < this.submittedMpcAnswers.length; mpcQuestionToCheck++){
      console.log(this.submittedMpcAnswers[mpcQuestionToCheck]);
      if(("" + this.submittedMpcAnswers[mpcQuestionToCheck].question.question.Antwoord) === ("" + this.submittedMpcAnswers[mpcQuestionToCheck].submittedValue)){
        this.countCorrect++;
        this.countIncorrect--;

        document.getElementById("sch_mpc_" + this.submittedMpcAnswers[mpcQuestionToCheck].question.questionID + "_" + this.submittedMpcAnswers[mpcQuestionToCheck].submittedValue).style.color = "#00FF00";

      }
      else{
        document.getElementById("sch_mpc_" + this.submittedMpcAnswers[mpcQuestionToCheck].question.questionID + "_" + this.submittedMpcAnswers[mpcQuestionToCheck].submittedValue).style.color = "#FF0000";
        document.getElementById("sch_mpc_" + this.submittedMpcAnswers[mpcQuestionToCheck].question.questionID + "_" + this.submittedMpcAnswers[mpcQuestionToCheck].question.question.Antwoord).style.color = "#00FF00";
      }


    }

    console.log('Calculating scores');
    this.percentageCorrect = (this.countCorrect / (this.countCorrect + this.countIncorrect) * 100).toFixed(2);
    this.grade = (this.countCorrect / (this.countCorrect + this.countIncorrect) * 9 + 1).toFixed(1);

    this.showFinalScore = true;
  }

  changeMpcValue(question: any, value: any){
    let alreadyPushed = false;
    let pushedIndex = 0;

    console.log('called');

    for(let mpcQuestion = 0; mpcQuestion < this.submittedMpcAnswers.length; mpcQuestion++){
      if(this.submittedMpcAnswers[mpcQuestion].question.questionID === question.questionID){
        alreadyPushed = true;
        pushedIndex = mpcQuestion;
        break;
      }
    }

    if(!alreadyPushed){
      this.submittedMpcAnswers.push({question: question, submittedValue: value})
    }
    else{
      this.submittedMpcAnswers[pushedIndex].submittedValue = value;
    }
  }
}
