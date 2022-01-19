/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {

  constructor() { }
// eslint-disable-next-line @typescript-eslint/member-ordering
notificacoes: number = 106;
  ngOnInit() {
  }

}
