import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Navegação', url: '/navegacao', icon: 'mail' },
    { title: 'Botões', url: '/botao', icon: 'radio-button-on' },
    { title: 'Alertas', url: '/alert', icon: 'alert' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
