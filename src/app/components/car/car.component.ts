import { Component, OnInit } from '@angular/core';
import { CarData } from "../../data/carData";


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carData = {
    fordFiesta:{
      carId: 'fordFiesta',
      producer: 'Ford',
      model:'Fiesta',
      speed: 186,
      carColors: {
        body: 'red',
        interior: 'yellow',
        wheels: 'R17 titan'
      },
      carOptions: ['ABS', 'ESP', 'ESC']
    },
    fordFocus:{
      carId: 'fordFocus',
      producer: 'Ford',
      model:'Focus',
      speed: 208,
      carColors: {
        body: 'dark-chery',
        interior: 'black',
        wheels: 'R19 titan'
      },
      carOptions: ['ABS', 'ESP', 'SYNC', 'ESC']
    },
    fordEscape:{
      carId: 'fordEscape',
      producer: 'Ford',
      model:'Escape',
      speed: 216,
      carColors: {
        body: 'violet-grey',
        interior: 'white',
        wheels: 'R21 titan'
      },
      carOptions: ['ABS', 'ESP', 'EPAS', 'SYNC', 'ESC']
    }
  }

  carId:string;
  producer:string;
  model:string;
  speed:number;
  carColors:carColorsDetail;
  carOptions:string[];
  isEdit:boolean = false;
  btnEditText:string = 'Show Fields'
  // test:any;

  constructor() {
  }

  ngOnInit(){
    this.carId = '';
    this.producer = '';
    this.model = '';

    this.carColors = {
      body: '',
      interior: '',
      wheels: ''
    }
  }

  carSelected(selectedAuto:string){

    // console.log(selectedAuto)
    if (selectedAuto == 'fordFiesta' || selectedAuto == 'fordFocus' || selectedAuto == 'fordEscape') {
      this.carId = this.carData[selectedAuto].carId;
      this.producer = this.carData[selectedAuto].producer;
      this.model = this.carData[selectedAuto].model;
      this.speed = this.carData[selectedAuto].speed;
      this.carColors = this.carData[selectedAuto].carColors;
      this.carOptions = this.carData[selectedAuto].carOptions;
    }

  }

  addNewOptions(newOption:string){

    if (this.carId != '' && newOption.length > 0 ){
      this.carOptions.unshift(newOption)
    }
    return false
  }

  deleteOption(option:string){
    for (let i = 0; i < this.carOptions.length; i++){
      if (this.carOptions[i] == option){
        this.carOptions.splice(i, 1)
      }
    }
  }

  showEditFields(){
    this.isEdit = !this.isEdit

    if (this.isEdit == false) this.btnEditText = 'Show Fields'
    if (this.isEdit == true) this.btnEditText = 'Hide Fields'

  }

  saveEditFields(carId:string, producer:string, model:string, speed:number, carColors:any){

    if (carId == 'fordFiesta' || carId == 'fordFocus' || carId == 'fordEscape') {
      this.carData[carId].producer = producer
      this.carData[carId].model = model
      this.carData[carId].speed = speed
      this.carData[carId].carColors = carColors
    }
  }

}

interface carColorsDetail {
  body:string,
  interior:string,
  wheels:string
}
