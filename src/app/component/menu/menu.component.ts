import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CounterInputComponent } from 'src/app/component/counter-input/counter-input.component';
//import { BackgroundImagesComponent } from './component/background-images-left/background-images.component';
import { HotDrinksComponent } from 'src/app/component/hot-drinks/hot-drinks.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm() {
    return new FormGroup({

    name: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl('')
    
    });
  }
  clearForm = (form: any) => {
    form.reset();
    form.submitted = false;
  }
} 
