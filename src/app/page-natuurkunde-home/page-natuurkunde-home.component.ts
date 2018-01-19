import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-natuurkunde-home',
  templateUrl: './page-natuurkunde-home.component.html',
  styleUrls: ['./page-natuurkunde-home.component.css']
})
export class PageNatuurkundeHomeComponent implements OnInit {

  constructor() { }

  changeStyle(button: any){
    for(let index = 0; index < 4; index++){
      let button = document.getElementById("button" + index);
      button.style.backgroundColor = "#FFFFFF";
      button.style.color = "#000000";
    }

    let selectedButton = document.getElementById("button" + button);
    selectedButton.style.backgroundColor = "#4682b4";
    selectedButton.style.color = "#FFFFFF";
  }

  ngOnInit() {
    let homeButton = document.getElementById("button0");
    homeButton.style.backgroundColor = "#4682b4";
    homeButton.style.color = "#FFFFFF";
  }

}
