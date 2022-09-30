import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorsService } from '../../../shared/validators/validators.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern(this.vs.namePattern) ] ],
    email: [ '', [ Validators.required, Validators.pattern(this.vs.emailPattern) ] ],
    username: [ '', [ Validators.required, this.vs.cantBeSkuzow ] ]
  });

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Alejandro Porras',
      email: 'alex@skuzow.net',
      username: 'skuzw'
    });
  }

  isInvalidField(field: string) {
    return this.myForm.get(field)?.touched
        && this.myForm.get(field)?.invalid;
  }

  save() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}
