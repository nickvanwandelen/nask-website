import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-subject-natuurkunde-krachtbeweging',
  templateUrl: './subject-natuurkunde-krachtbeweging.component.html',
  styleUrls: ['./subject-natuurkunde-krachtbeweging.component.css']
})
export class SubjectNatuurkundeKrachtbewegingComponent implements OnInit {

  show_awnsers = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleScroll(elementToScrollTo){
    window.scrollTo(0, elementToScrollTo.offsetTop);
  }


  handleShowAwnsers(){
    this.show_awnsers = !this.show_awnsers;
  }


}

