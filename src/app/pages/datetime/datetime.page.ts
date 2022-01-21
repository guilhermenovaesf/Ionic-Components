import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  // @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  // dateValue = '';
  // dateValue2 = '';
  constructor() { }

  ngOnInit() {
  }
  // confirm() {
  //   this.datetime.nativeEl.confirm();
  // }

  // reset() {
  //   this.datetime.nativeEl.reset();
  // }

  // formatDate(value: string) {
  //   return format(parseISO(value), 'MMM dd yyyy');
  // }
}
