import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  producer:string;
  model:string;
  speed:number;

  carColors:carColorsDetail;
  carOptions:string[];
  // test:any;

  constructor() {
  }

  ngOnInit(){

    this.carColors = {
      body: '',
      interior: '',
      wheels: ''
    }
    this.carOptions = []
  }

  carSelected(selectedAuto:string){

    if (selectedAuto == "fordFiesta") {
      this.producer = 'Ford';
      this.model = 'Fiesta';
      this.speed = 186;
      this.carColors = {
        body: 'red color',
        interior: 'yellow color',
        wheels: 'R17 titan'
      }
      this.carOptions = ['ABS', 'ESP', 'ESC']
    }else if (selectedAuto == "fordFocus"){
      this.producer = 'Ford';
      this.model = 'Focus';
      this.speed = 208;
      this.carColors = {
        body: 'dark chery color',
        interior: 'black color',
        wheels: 'R19 titan'
      }
      this.carOptions = ['ABS', 'ESP', 'EPAS', 'ESC']
    }else if (selectedAuto == "fordEscape"){
      this.producer = 'Ford';
      this.model = 'Escape';
      this.speed = 216;
      this.carColors = {
        body: 'violet-grey color',
        interior: 'white color',
        wheels: 'R21 titan'
      }
      this.carOptions = ['ABS', 'ESP', 'EPAS', 'SYNC', 'ESC']
    }


  }
}

interface carColorsDetail {
  body:string,
  interior:string,
  wheels:string
}
