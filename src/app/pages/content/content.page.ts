import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logScrollStart(){
    console.log('iniciou a interação com o Scroll');
  }
  logScrollEnd(){
    console.log('Scroll parou de acontecer');
  }
  logScrolling(e: any){
    console.log('evento scroll',e);

  }
}
