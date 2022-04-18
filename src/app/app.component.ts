import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CounterInputComponent } from 'src/app/component/counter-input/counter-input.component';
import { BackgroundImagesComponent } from './component/background-images-left/background-images.component';
import { HotDrinksComponent } from 'src/app/component/hot-drinks/hot-drinks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  elements=[{
    p:"“Pizza” is the second word in our motto because, without family, we wouldn't be able to make the pizza you all know and love. Let's dive into the second word of the motto with the owner, Sean Rowe, and what makes the pizza so special at Alexander's pizza.",
    h2:"IN THE “FAMILY. PIZZA. FRIENDS.” MOTTO, WHY DID YOU FEEL IT WAS IMPORTANT TO MENTION “PIZZA” SPECIFICALLY SINCE ALEXANDER'S PIZZA IS A PIZZA PLACE?"
  },{
    p:"It is the most important product we sell. Yes, we have great salads, wings, garlic knots and so much more, but we are first and foremost a pizzeria.",
    h2:"WHY IS “PIZZA” IMPORTANT TO YOU PERSONALLY?"
  },{
    p:"Because I grew up with it. It is America's number one family dish if you think about it. Families get together at the pool, and they order pizza. Families travel and visit their friends, and sure enough, they order pizza the first night. It's a family food.",
    h2:"DO YOU REMEMBER THE FIRST PIZZA YOU EVER HAD? WHERE WAS IT?"
  },{
    p:"Alexander's pizza in Corvallis, Oregon. We were stationed out there, and I would ride my tricycle up to the store and watch the guys spin pies through the window. I would stay there for hours.",
    h2:"WHAT’S YOUR FAVORITE PIZZA FROM ALEXANDER’S PIZZA?"
  },{
    p:"Probably the Cappriciosa because that is a Roman recipe and reminds me of my time there in school. Ham, Kalamata olives, tomatoes. It’s awesome.",
    h2:"FOR THOSE WHO MAY NOT HAVE VISITED ALEXANDER’S PIZZA BEFORE, WHAT PIES WOULD YOU RECOMMEND?"
  }];

  constructor() { }

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



