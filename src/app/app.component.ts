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
    { title: 'Action-Sheet', url: '/actionsheet', icon: 'alert' },
    { title: 'Badge', url: '/badge', icon: 'alert' },
    { title: 'Card', url: '/card', icon: 'alert' },
    { title: 'Checkbox', url: '/checkbox', icon: 'alert' },
    { title: 'Chip', url: '/chip', icon: 'alert' },
    { title: 'Content', url: '/content', icon: 'alert' },
    { title: 'DateTime', url: '/datetime', icon: 'alert' },
    { title: 'Fab', url: '/fab', icon: 'alert' },
    { title: 'Grid', url: '/grid', icon: 'alert' },
    { title: 'Infinite Scroll', url: '/infinitescroll', icon: 'alert' },
    { title: 'Input', url: '/input', icon: 'alert' },
    { title: 'List', url: '/list', icon: 'alert' },
    { title: 'ProgressBar', url: '/progressbar', icon: 'alert' },
    { title: 'Refresher', url: '/refresher', icon: 'alert' },
    { title: 'Reorder', url: '/reorder', icon: 'alert' },
    { title: 'Select', url: '/select', icon: 'alert' },
    { title: 'Toggle', url: '/toggle', icon: 'alert' },



  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
