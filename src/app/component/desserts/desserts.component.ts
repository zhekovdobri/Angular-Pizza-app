import { Component, OnInit } from '@angular/core';
import { CounterInputComponent } from 'src/app/component/counter-input/counter-input.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent implements OnInit {

    form!: FormGroup;

    ngOnInit(): void {
    this.form = this.createForm();
    }

    createForm() {
        return new FormGroup({

            red_velvet: new FormControl(0),
            hazelnut_cake: new FormControl(0),
            honey_cake: new FormControl(0),
            malina_cake: new FormControl(0),
            white_sunday: new FormControl(0),
            bavaria_cake: new FormControl(0),
            chocolate_cake: new FormControl(0)
        });
    }
}