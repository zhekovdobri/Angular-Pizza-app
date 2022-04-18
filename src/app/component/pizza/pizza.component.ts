import { Component, OnInit } from '@angular/core';
import { CounterInputComponent } from 'src/app/component/counter-input/counter-input.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})

export class PizzaComponent implements OnInit {
    
  data1 = [{
    label:'Margherita: ',
    src:'assets/images/Margherita.png',
    formControlName:'margherita'
},{
    label:'Pepperoni: ',
    src:'assets/images/Pepperoni.png',
    formControlName:'pepperoni'
},{
    label:'BBQ Pizza: ',
    src:'assets/images/BBQ.png',
    formControlName:'bbq'
},{
    label:'Hawaiian: ',
    src:'assets/images/Hawaiian.png',
    formControlName:'hawaiian'
},{
    label:'Neapolitan: ',
    src:'assets/images/Neapolitan.png',
    formControlName:'neapolitan'
},{
    label:'Calzone: ',
    src:'assets/images/Calzone.png',
    formControlName:'calzone'
},{
    label:'Capricciosa: ',
    src:'assets/images/Capricciosa.png',
    formControlName:'capricciosa'
}];

  constructor() { }

  form!: FormGroup;

  ngOnInit(): void {
  this.form = this.createForm();
  }

  createForm() {
      return new FormGroup({

        margherita: new FormControl(0),
        pepperoni: new FormControl(0),
        bbq: new FormControl(0),
        hawaiian: new FormControl(0),
        neapolitan: new FormControl(0),
        calzone: new FormControl(0),
        capricciosa: new FormControl(0),
        pizza_size: new FormControl('')
          
      });
  }
}





           