import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  form: any[] = [
    { nomeAqui: 'Pepperoni (isChecked = true)', marcado: true },
    { nomeAqui: 'Sausage', marcado: false },
    { nomeAqui: 'Mushroom', marcado: false }
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.form);
  }
  exibirMeses(){
    console.log(this.form);
  }
}
