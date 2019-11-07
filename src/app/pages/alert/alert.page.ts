import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  AlertTitulo = 'alerta';
  constructor( public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      inputs: [
        {
          name: 'newTitle',
          type: 'text',
          placeholder: 'Ingrese nuevo título de página'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Botón cancelar');
          }
        },
        {
          text: 'OK',
          handler: (blah) => {
            console.log('Botón OK');
          }
        }
      ]
    });

    await alert.present();
  }

  async changeTitle() {
    const alert = await this.alertCtrl.create({
      header: 'Cambia el Título',
      subHeader: 'de esta página',
      message: 'En esta ventana podrás cambiar el título.',
      inputs: [
        {
          name: 'newTitle',
          type: 'text',
          placeholder: 'Ingrese nuevo título de página'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Botón cancelar');
          }
        },
        {
          text: 'OK',
          handler: ( data ) => {
            console.log('Botón OK', data);
            this.AlertTitulo = data.newTitle;
          }
        }
      ]
    });

    await alert.present();
  }

}
