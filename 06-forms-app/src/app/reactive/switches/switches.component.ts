import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    gender: [ 'M', Validators.required ],
    notifications: [ true, Validators.required ],
    termsConditions: [ false, Validators.requiredTrue ]
  });

  person = {
    gender: 'F',
    notifications: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      termsConditions: false
    });
    this.myForm.valueChanges.subscribe(({ termsConditions, ...rest }) => {
      this.person = rest;
    });
  }

  save() {
    const formValue = { ...this.myForm.value };
    delete formValue.termsConditions;
    this.person = formValue;
  }

}
