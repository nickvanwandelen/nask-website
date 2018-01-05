import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-scheikunde-faseovergangen',
  templateUrl: './subject-scheikunde-faseovergangen.component.html',
  styleUrls: ['./subject-scheikunde-faseovergangen.component.css']
})
export class SubjectScheikundeFaseovergangenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleScroll(elementToScrollTo){
    window.scrollTo(0, elementToScrollTo.offsetTop);
  }

}
