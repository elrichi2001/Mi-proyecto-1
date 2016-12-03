import { Component } from '@angular/core';
import {Geolocation} from 'ionic-native';
import { Dialogs } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {


  }

  mostrarCoordenadas(){
  	Geolocation.getCurrentPosition().then((position=>{
  		let lati = position.coords.latitude;
  		let longi = position.coords.longitude;
  		console.log('Latitud:', lati);
  		console.log('Longitud:', longi);
  		Dialogs.alert('Long:' + longi + 'lat:' + lati, 'Coordenadas', 'OK');
  		//Dialogs.alert('Esta es una alerta', 'Alert!', 'Entendido');
  	})
  )}


  /*
  loadAlert() {
    Dialogs.alert('Esta es una alerta', 'Alert!', 'Entendido');
    
  }
  */

}
