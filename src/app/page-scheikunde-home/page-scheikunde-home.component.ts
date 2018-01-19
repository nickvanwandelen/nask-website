import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-scheikunde-home',
  templateUrl: './page-scheikunde-home.component.html',
  styleUrls: ['./page-scheikunde-home.component.css']
})
export class PageScheikundeHomeComponent implements OnInit {


  constructor() {

  }

  changeStyle(button: any){
    for(let index = 0; index < 5; index++){
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
