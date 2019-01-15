import { Component, OnInit } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import { fadeInDown, fadeIn } from 'ng-animate';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  introText1 = 'Hi, I\'m Jorge Branquinho,';
  introText2 = 'Lorem ipsum';
  introText3 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.`;
 
  enterAnimation: TextAnimation = {
    animation: fadeIn,
    delay: 50,
    type: 'letter'
  };

  constructor() {
   }

  ngOnInit() {
    
  }

}
