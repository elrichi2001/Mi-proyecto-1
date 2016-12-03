import { Component } from '@angular/core';
import { Dialogs } from 'ionic-native';
import { NavController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  loadAlert() {
    Dialogs.alert('este es un mensaje con ventana nativa', 'Alert!', 'Entendido');
  }

  loadConfirm() {
    Dialogs.confirm('Mensaje que requiere confirmacion', 'COnfirm', ['Entendido', 'Cancelar'])
      .then((options) => console.log(options), (error) => console.log(error));
  }

  loadPrompt() {
    Dialogs.prompt('Ventana con prompt', 'Prompt', ['Aceptar', 'Cancelar'], 'Ingrese id')
      .then(results => console.log(results.buttonIndex, results.input1), error => console.log(error));
  }
  mostrarCoordenadas(){
    //Dialogs.alert('Esta es una alerta', 'Alert!', 'Entendido');
  	Geolocation.getCurrentPosition({enableHighAccuracy: true, maximumAge: 3000, timeout: 5000}).then(position=>{
  		//let lati = position.coords.latitude;
  		//let longi = position.coords.longitude;
  		console.log('Latitud:', position.coords.latitude.toString());
  		console.log('Longitud:', position.coords.longitude.toString());
  		//Dialogs.alert('Long:' + position.coords.longitude + 'lat:' + position.coords.latitude, 'Coordenadas', 'OK');
  		Dialogs.alert('Esta es una alerta', 'Alert!', 'Entendido');
  	})
    .then(err=> console.error(err));
    
  }
}
