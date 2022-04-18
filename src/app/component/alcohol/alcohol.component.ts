import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { CounterInputComponent } from 'src/app/component/counter-input/counter-input.component';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.scss']
})
export class AlcoholComponent implements OnInit {
    
    constructor() { }

    form!: FormGroup;

    ngOnInit(): void {
    this.form = this.createForm();
    }

    createForm() {
        return new FormGroup({

            guinness: new FormControl(0),
            heineken: new FormControl(0),
            tuborg: new FormControl(0),
            carlsberg: new FormControl(0),
            cabernet: new FormControl(0),
            merlot: new FormControl(0),
            cardonnay: new FormControl(0)
        });
    }
}