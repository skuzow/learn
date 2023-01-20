import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern(this.vs.namePattern) ] ],
    email: [ '', [ Validators.required, Validators.pattern(this.vs.emailPattern) ], [ this.ev ] ],
    username: [ '', [ Validators.required, this.vs.cantBeSkuzow ] ],
    pass: [ '', [ Validators.required, Validators.minLength(6) ] ],
    confirmpass: [ '', [ Validators.required ] ],
  }, {
    validators: [ this.vs.sameFields('pass', 'confirmpass') ]
  });

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.['required']) {
      return 'Email is required';
    }
    else if (errors?.['pattern']) {
      return 'Value needs to be in email format';
    }
    else if (errors?.['emailTaken']) {
      return 'Email is already taken';
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService,
    private ev: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Alejandro Porras',
      email: 'alex@skuzow.net',
      username: 'skuzw',
      pass: '123456',
      confirmpass: '123456'
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
