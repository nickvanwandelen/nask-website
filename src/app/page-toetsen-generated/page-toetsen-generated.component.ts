import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {MatRadioChange} from '@angular/material';

@Component({
  selector: 'app-page-toetsen-generated',
  templateUrl: './page-toetsen-generated.component.html',
  styleUrls: ['./page-toetsen-generated.component.css']
})
export class PageToetsenGeneratedComponent implements OnInit {

  loaded: boolean = false;

  natuurkundeSubjectsArray;
  scheikundeSubjectsArray;

  showScore: boolean = false;
  correct: number;
  incorrect: number;
  percentage;
  grade: any;


  constructor(private afs: AngularFirestore){

  }

  ngOnInit() {
  }

  randomizeAnswers(questionToRandomize: any){
    let randomizedAnswers = [];
    randomizedAnswers.push(questionToRandomize.Antwoord);

    for(let index = 0; index < questionToRandomize.FoutieveAntwoorden.length; index++){
      randomizedAnswers.push(questionToRandomize.FoutieveAntwoorden[index]);
    }

    let currentIndex = randomizedAnswers.length, tempValue, randomIndex;
    while(currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = randomizedAnswers[currentIndex];
      randomizedAnswers[currentIndex] = randomizedAnswers[randomIndex];
      randomizedAnswers[randomIndex] = tempValue;
    }

    return randomizedAnswers;
  }

  generateTest(loadNatSubjects: any, loadSchSubjects: any){
    this.natuurkundeSubjectsArray = [];
    this.scheikundeSubjectsArray = [];
    this.showScore = false;

    //Loading Natuurkunde questions
    for(let natIndex = 0; natIndex < loadNatSubjects.length; natIndex++){
      let subjectQuestionsContainer = [];
      let natReference = this.afs.collection('natuurkunde').doc(loadNatSubjects[natIndex].subject).collection('vragen');
      natReference.ref.get().then(function(returnedCollection){
        returnedCollection.forEach(function(document){
          subjectQuestionsContainer.push(document.data());

          if(document.data().Type === "mpc"){
            let randomizedAnswers = [];
            randomizedAnswers.push(document.data().Antwoord);

            for(let index = 0; index < document.data().FoutieveAntwoorden.length; index++){
              randomizedAnswers.push(document.data().FoutieveAntwoorden[index]);
            }

            let currentIndex = randomizedAnswers.length, tempValue, randomIndex;
            while(currentIndex !== 0){
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              tempValue = randomizedAnswers[currentIndex];
              randomizedAnswers[currentIndex] = randomizedAnswers[randomIndex];
              randomizedAnswers[randomIndex] = tempValue;
            }

            subjectQuestionsContainer[subjectQuestionsContainer.length - 1].RandomizedAnswers = randomizedAnswers;

            for(let checkForCorrectAnswer = 0; checkForCorrectAnswer < subjectQuestionsContainer[subjectQuestionsContainer.length - 1].RandomizedAnswers.length; checkForCorrectAnswer++){
              if(subjectQuestionsContainer[subjectQuestionsContainer.length - 1].RandomizedAnswers[checkForCorrectAnswer] === document.data().Antwoord){
                subjectQuestionsContainer[subjectQuestionsContainer.length - 1].RandomAnswerIndex = checkForCorrectAnswer;
                break;
              }
            }
          }
        });
      });
      this.natuurkundeSubjectsArray.push({subject: loadNatSubjects[natIndex].subject, questions: subjectQuestionsContainer});
    }

    //Loading Scheikunde questions
    for(let schIndex = 0; schIndex < loadSchSubjects.length; schIndex++){
      let subjectQuestionsContainer = [];
      let schReference = this.afs.collection('scheikunde').doc(loadSchSubjects[schIndex].subject).collection('vragen');
      schReference.ref.get().then(function(returnedCollection){
        returnedCollection.forEach(function(document){
          subjectQuestionsContainer.push(document.data());
          if(document.data().Type === "mpc"){
            let randomizedAnswers = [];
            randomizedAnswers.push(document.data().Antwoord);

            for(let index = 0; index < document.data().FoutieveAntwoorden.length; index++){
              randomizedAnswers.push(document.data().FoutieveAntwoorden[index]);
            }

            let currentIndex = randomizedAnswers.length, tempValue, randomIndex;
            while(currentIndex !== 0){
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              tempValue = randomizedAnswers[currentIndex];
              randomizedAnswers[currentIndex] = randomizedAnswers[randomIndex];
              randomizedAnswers[randomIndex] = tempValue;
            }

            subjectQuestionsContainer[subjectQuestionsContainer.length - 1].RandomizedAnswers = randomizedAnswers;

            for(let checkForCorrectAnswer = 0; checkForCorrectAnswer < subjectQuestionsContainer[subjectQuestionsContainer.length - 1].RandomizedAnswers.length; checkForCorrectAnswer++){
              if(subjectQuestionsContainer[subjectQuestionsContainer.length - 1].RandomizedAnswers[checkForCorrectAnswer] === document.data().Antwoord){
                subjectQuestionsContainer[subjectQuestionsContainer.length - 1].RandomAnswerIndex = checkForCorrectAnswer;
                break;
              }
            }
          }

        });
      });
      this.scheikundeSubjectsArray.push({subject: loadSchSubjects[schIndex].subject, questions: subjectQuestionsContainer});
    }

    this.loaded = true;
  }

  submitTest(topTitle: any){
    this.correct = 0;
    this.incorrect = 0;
    this.percentage = 0;
    this.grade = 0;


    for(let natSubIndex = 0; natSubIndex < this.natuurkundeSubjectsArray.length; natSubIndex++){
      for(let natQuestionIndex = 0; natQuestionIndex < this.natuurkundeSubjectsArray[natSubIndex].questions.length; natQuestionIndex++){
        if(this.natuurkundeSubjectsArray[natSubIndex].questions[natQuestionIndex].Type === "open"){
          let input = document.getElementsByName("nat_" + this.natuurkundeSubjectsArray[natSubIndex].subject + "_question_" + natQuestionIndex)[0];

          if(("" + (<HTMLInputElement>input).value).toUpperCase().replace(/\s/g, '') === ("" + this.natuurkundeSubjectsArray[natSubIndex].questions[natQuestionIndex].Antwoord).toUpperCase().replace(/\s/g, '')){
            this.correct++;
          }
          else{
            this.incorrect++;
          }

          (<HTMLInputElement>input).disabled = true;
        }
        else{
          console.log("Checking MPC Question");
          let radioGroup = document.getElementsByName("nat_" + this.natuurkundeSubjectsArray[natSubIndex].subject + "_question_" + natQuestionIndex);
          let randomIndex = this.natuurkundeSubjectsArray[natSubIndex].questions[natQuestionIndex].RandomAnswerIndex;
          if((<HTMLInputElement>radioGroup[randomIndex]).checked){ //correctly answerd
            this.correct++;
          }
          else{ //incorrect
            this.incorrect++;
          }

          for(let radioOption = 0; radioOption < radioGroup.length; radioOption++){
            (<HTMLInputElement>radioGroup[radioOption]).disabled = true;
          }
        }
      }
    }

    for(let schSubIndex = 0; schSubIndex < this.scheikundeSubjectsArray.length; schSubIndex++){
      for(let schQuestionIndex = 0; schQuestionIndex < this.scheikundeSubjectsArray[schSubIndex].questions.length; schQuestionIndex++){
        if(this.scheikundeSubjectsArray[schSubIndex].questions[schQuestionIndex].Type === "open"){
          let input = <HTMLInputElement>document.getElementsByName("sch_" + this.scheikundeSubjectsArray[schSubIndex].subject + "_question_" + schQuestionIndex)[0];

          if(("" + input.value).toUpperCase().replace(/\s/g, '') === ("" + this.scheikundeSubjectsArray[schSubIndex].questions[schQuestionIndex].Antwoord).toUpperCase().replace(/\s/g, '')){
            this.correct++;
          }
          else{
            this.incorrect++;
          }

          input.disabled = true;
        }
        else{
          console.log("Checking MPC Question");
          let radioGroup = document.getElementsByName("sch_" + this.scheikundeSubjectsArray[schSubIndex].subject + "_question_" + schQuestionIndex);
          let randomIndex = this.scheikundeSubjectsArray[schSubIndex].questions[schQuestionIndex].RandomAnswerIndex;
          console.log(randomIndex);
          console.log(radioGroup[randomIndex]);
          // noinspection TypeScriptUnresolvedVariable
          if((<HTMLInputElement>radioGroup[randomIndex]).checked){ //correctly answerd
            this.correct++;
          }
          else{ //incorrect
            this.incorrect++;
          }

          for(let radioOption = 0; radioOption < radioGroup.length; radioOption++){
            // noinspection TypeScriptUnresolvedVariable
            (<HTMLInputElement>radioGroup[radioOption]).disabled = true;
          }
        }
      }
    }

    this.percentage = (this.correct / (this.correct + this.incorrect)) * 100;
    this.percentage = this.percentage.toFixed(2);

    this.grade = (this.correct / (this.correct + this.incorrect)) * 9 + 1;
    this.grade = this.grade.toFixed(1);

    this.showScore = true;

    window.scrollTo(0, topTitle.offsetTop);
  }


}
