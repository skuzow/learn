import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  // temp
  namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'; // Validators.email not rly accurate

  //temp
  cantBeSkuzow(control: FormControl) {
    const value = control.value?.trim().toLowerCase();
    if (value === 'skuzow') {
      return {
        noSkuzow: true
      }
    }
    return null;
  }

  myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern(this.namePattern) ] ],
    email: [ '', [ Validators.required, Validators.pattern(this.emailPattern) ] ],
    username: [ '', [ Validators.required, this.cantBeSkuzow ] ]
  });

  constructor(private fb: FormBuilder) { }

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
