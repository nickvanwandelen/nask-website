import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-subject-natuurkunde-krachtbeweging',
  templateUrl: './subject-natuurkunde-krachtbeweging.component.html',
  styleUrls: ['./subject-natuurkunde-krachtbeweging.component.css']
})
export class SubjectNatuurkundeKrachtbewegingComponent implements OnInit {

  newton_columns = ['standard', 'standard_symbol', 'unit', 'unit_symbol'];
  newton_explained = new MatTableDataSource(NEWTON_DEFINITON);
  show_awnsers = false;

  constructor() { }

  ngOnInit() {
  }

  handleShowAwnsers(){
    this.show_awnsers = !this.show_awnsers;
  }

}

export interface UnitDefinition{
  standard: string;
  standard_symbol: string;
  unit: string;
  unit_symbol: string;
}

const NEWTON_DEFINITON: UnitDefinition[] = [
  {standard: 'Kracht', standard_symbol: 'F', unit: 'Newton', unit_symbol: 'N'}
  ];

