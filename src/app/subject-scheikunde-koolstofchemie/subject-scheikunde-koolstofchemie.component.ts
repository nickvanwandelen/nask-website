import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-scheikunde-koolstofchemie',
  templateUrl: './subject-scheikunde-koolstofchemie.component.html',
  styleUrls: ['./subject-scheikunde-koolstofchemie.component.css']
})
export class SubjectScheikundeKoolstofchemieComponent implements OnInit {

  /*availableSubjects = [
    {name: 'introductie', show: true},
    {name: "fotosynthese", show: false},
    {name: "aardolieraffinaderij", show: false},
    {name: "opbouw_moleculen", show: false},
    {name: "naamgeving_koolwaterstoffen", show: false},
    {name: "benoeming_halogeenalkanen", show: false},
    {name: "kunststoffen", show: false},
    {name: "thermoharders_thermoplasten", show: false},
    {name: 'monomeer_polymeer', show: false}
  ];*/

  constructor() { }

  ngOnInit() {
  }

  showSubject(subjectToShow){
    /*for(let subject = 0; subject < this.availableSubjects.length; subject++){
      console.log('Called' + subjectToShow);
      //this.availableSubjects[subject].show = this.availableSubjects[subject].name === subjectToShow;
      return true;
    }*/
  }

  handleScroll(elementToScrollTo){
    window.scrollTo(0, elementToScrollTo.offsetTop);
  }

}
