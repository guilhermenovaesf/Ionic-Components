import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCrtl: AlertController) { }

  ngOnInit() {
  }

async alert(){
const alerta = await this.alertCrtl.create({
  header:'Alerta',
  subHeader:'Subtitle',
  message:'This is an alert messsage',
  buttons:['OK']
});
//poderia colocar o objeto acima em uma variável e chamar ela no .create(this.variavel)
alerta.present();

  }

  async multipleButtons(){
    const alerta = await this.alertCrtl.create({
      header:'Alerta',
      subHeader:'Subtitle',
      message:'This is an alert messsage',
      buttons:['CANCEL','OPEN MODAL','DELETE']
    });
    alerta.present();

  }
async confirm(){
  const alerta = await this.alertCrtl.create({
    header:'Alerta',
    message:'Message <strong> Text</strong>!!',
    buttons:[{
      text:'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) =>{
        console.log('Confirm Cancel: blah');
        //handler é o evento desse botão
      }
    },{
      text:'Okay',
      handler:()=>{
        console.log('Confirm Okay');
      }
    }]
  });
  alerta.present();
}

async prompt(){
  const alert = await this.alertCrtl.create({
    cssClass: 'my-custom-class',
    header: 'Prompt!',
    inputs: [
      {
        name: 'nome',
        type: 'text',
        placeholder: 'Nome'
      },
      {
        name: 'name2',
        type: 'text',
        id: 'name2-id',
        value: 'hello',
        placeholder: 'Placeholder 2'
      },
      // multiline input.
      {
        name: 'paragraph',
        id: 'paragraph',
        type: 'textarea',
        placeholder: 'Placeholder 3'
      },
      {
        name: 'email',
        type: 'text',
        placeholder: 'Email'
      },
      // input date with min & max
      {
        name: 'name4',
        type: 'date',
        min: '2017-03-01',
        max: '2018-01-12'
      },
      // input date without min nor max
      {
        name: 'name5',
        type: 'date'
      },
      {
        name: 'name6',
        type: 'number',
        min: -5,
        max: 10
      },
      {
        name: 'radio1',
        type: 'radio',
        label: 'Radio 1',
        value: 'value1',
        handler: () => {
          console.log('Radio 1 selected');
        },
        checked: true
      },
      {
        name: 'name8',
        type: 'password',
        placeholder: 'Advanced Attributes',
        cssClass: 'specialClass',
        attributes: {
          maxlength: 4,
          inputmode: 'decimal'
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (form) => {
          console.log(form);
          //Já vai imprimir o json do meu formulário
        }
      }
    ]
  });
console.log(alert);
  await alert.present();
}
}
