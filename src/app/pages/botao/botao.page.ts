import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.page.html',
  styleUrls: ['./botao.page.scss'],
})
export class BotaoPage implements OnInit {

  constructor( private navUrl: NavController) { }

  ngOnInit() {
  }
  showPageHome(){
this.navUrl.navigateForward('home');
  }

}
