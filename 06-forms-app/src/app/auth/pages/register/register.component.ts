import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  // temp
  namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; // Validators.email not rly accurate

  myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern(this.namePattern) ] ],
    email: [ '', [ Validators.required, Validators.pattern(this.emailPattern) ] ]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Alejandro Porras',
      email: 'alex@skuzow.net'
    })
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
