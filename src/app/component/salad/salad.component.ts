import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { CounterInputComponent } from 'src/app/component/counter-input/counter-input.component';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.scss']
})
export class SaladComponent implements OnInit {

  data2 = [{
    label:'Caesar: ',
    src:'assets/images/Caesar.png',
    formControlName:'caesar'
},{
    label:'Cobb: ',
    src:'assets/images/Cobb.png',
    formControlName:'cobb'
},{
    label:'Caprese: ',
    src:'assets/images/Caprese.png',
    formControlName:'caprese'
},{
    label:'Larb: ',
    src:'assets/images/Larb.png',
    formControlName:'larb'
},{
    label:'Nicoise: ',
    src:'assets/images/Nicoise.png',
    formControlName:'nicoise'
},{
    label:'Tabbouli: ',
    src:'assets/images/Tabbouli.png',
    formControlName:'calzone'
},{
    label:'Waldorf: ',
    src:'assets/images/Waldorf.png',
    formControlName:'waldorf'
}];

  constructor() { }

    form!: FormGroup;

    ngOnInit(): void {
    this.form = this.createForm(); 
    }

    createForm() {
        return new FormGroup({
            caesar: new FormControl(0), 
           
            cobb: new FormControl(0),
            
            caprese: new FormControl(0),
           
            larb: new FormControl(0),
            
            nicoise: new FormControl(0),
            
            tabbouli: new FormControl(0),
           
            waldorf: new FormControl(0)
        });
    }

}

/*
caesar: new FormControl(0), 
            salad_size_caesar: new FormControl(''),
            cobb: new FormControl(0),
            salad_size: new FormControl(''),
            caprese: new FormControl(0),
            salad_size_caprese: new FormControl(''),
            larb: new FormControl(0),
            salad_size_larb: new FormControl(''),
            nicoise: new FormControl(0),
            salad_size_nicoise: new FormControl(''),
            tabbouli: new FormControl(0),
            salad_size_tabbouli: new FormControl(''),
            waldorf: new FormControl(0),
            salad_size_waldorf: new FormControl('')
*/
