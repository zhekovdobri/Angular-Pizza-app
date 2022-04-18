import { Component, OnInit } from '@angular/core';
import { CounterInputComponent } from 'src/app/component/counter-input/counter-input.component';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-hot-drinks',
  templateUrl: './hot-drinks.component.html',
  styleUrls: ['./hot-drinks.component.scss']
})
export class HotDrinksComponent implements OnInit {
    
    data3 = [{
        label:'Cappuccino: ',
        src:'assets/images/Cappuccino.png',
        formControlName:'cappuccino'
    },{
        label:'Mocha: ',
        src:'assets/images/Mocha.png',
        formControlName:'mocha'
    },{
        label:'Americano: ',
        src:'assets/images/Americano.png',
        formControlName:'americano'
    },{
        label:'Frape: ',
        src:'assets/images/Frape.png',
        formControlName:'frape'
    },{
        label:'Chocolate: ',
        src:'assets/images/Chocolate.png',
        formControlName:'chocolate'
    },{
        label:'Milk: ',
        src:'assets/images/Milk.png',
        formControlName:'milk'
    },{
        label:'English tea: ',
        src:'assets/images/Tea.png',
        formControlName:'tea'
    }];

    constructor() { }

    form!: FormGroup;

    ngOnInit(): void {
    this.form = this.createForm();
    }

    createForm() {
        return new FormGroup({

            cappuccino: new FormControl(0),
            mocha: new FormControl(0),
            americano: new FormControl(0),
            frape: new FormControl(0),
            chocolate: new FormControl(0),
            milk: new FormControl(0),
            tea: new FormControl(0),
            
        });
    }
}
