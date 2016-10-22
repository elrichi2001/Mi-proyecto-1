import { Component } from '@angular/core';

 export class Ride {
     id: number;
     name: string;
     description: string;
     price: number;
     units: number;
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/carreras.html'
})
export class AppComponent {

    title: string = "Carrera de Taxi";
    selected: Ride;
    rides: Ride[] = ITEMS;

    onSelect(ride: Ride) {
        this.selected = ride;
    }
}

const ITEMS: Ride[] = [
    {
        id: 1,
        name: "Minima",
        description: "50 unidades o menos",
        price: 4100,
        units: 50
    },
    {
        id: 2,
        name: "Festivos",
        description: "`Cargo de festivo",
        price: 1900,
        units: 0
    },
    {
        id: 3,
        name: "App",
        description: "Cargo app o puerta a puetar",
        price: 700,
        units: 0
    },
    {
        id: 4,
        name: "Airport",
        description: "Cargo al aeropuerto",
        price: 3900,
        units: 0
    }
];