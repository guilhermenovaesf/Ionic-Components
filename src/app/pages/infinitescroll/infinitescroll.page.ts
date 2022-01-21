import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.page.html',
  styleUrls: ['./infinitescroll.page.scss'],
})
export class InfinitescrollPage implements OnInit {
// eslint-disable-next-line max-len
numeros=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
limit =20;
constructor() { }

  ngOnInit() {
  }
popularInfinite(infiniteScrollEvent: any){
  console.log('carrega mais 10');
  this.limit +=10;
  infiniteScrollEvent.target.complete();
}
}
