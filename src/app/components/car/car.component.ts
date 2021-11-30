import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

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
    this.carId = 'fordFiesta';
    this.producer = 'Ford';
    this.model = 'Fiesta';
    this.speed = 186;

    this.carColors = {
      body: 'red',
      interior: 'yellow',
      wheels: 'R17 titan'
    }

    this.carOptions = ['ABS', 'ESP', 'EPAS', 'SYNC', 'ESC']
  }

  carSelected(selectedAuto:string){

    if (selectedAuto == "fordFiesta") {
      this.carId = 'fordFiesta';
      this.producer = 'Ford';
      this.model = 'Fiesta';
      this.speed = 186;
      this.carColors = {
        body: 'red',
        interior: 'yellow',
        wheels: 'R17 titan'
      }
      this.carOptions = ['ABS', 'ESP', 'ESC']
    }else if (selectedAuto == "fordFocus"){
      this.carId = 'fordFocus';
      this.producer = 'Ford';
      this.model = 'Focus';
      this.speed = 208;
      this.carColors = {
        body: 'dark-chery',
        interior: 'black',
        wheels: 'R19 titan'
      }
      this.carOptions = ['ABS', 'ESP', 'EPAS', 'ESC']
    }else if (selectedAuto == "fordEscape"){
      this.carId = 'fordEscape';
      this.producer = 'Ford';
      this.model = 'Escape';
      this.speed = 216;
      this.carColors = {
        body: 'violet-grey',
        interior: 'white',
        wheels: 'R21 titan'
      }
      this.carOptions = ['ABS', 'ESP', 'EPAS', 'SYNC', 'ESC']
    }

  }

  addNewOptions(newOption:string){
    this.carOptions.unshift(newOption)
    return false;
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
    console.log(this.carId)
    console.log(this.producer)
    console.log(this.model)
    console.log(this.speed)
    console.log(this.carColors)

  }

}

interface carColorsDetail {
  body:string,
  interior:string,
  wheels:string
}
