import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  color: string = 'red';
  msg: string = 'Alejandro';

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required ]
  });

  constructor(private fb: FormBuilder) { }

  isInvalid(field: string): boolean {
    return this.myForm.get(field)?.invalid || false;
  }

  changeColor() {
    this.color = 'green';
  }

  changeMsg() {
    this.msg = 'Pepe';
  }

}
