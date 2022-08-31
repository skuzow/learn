import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {

  /* another way
  myForm: FormGroup = new FormGroup({
    'name': new FormControl('RTX 4080ti'),
    'price': new FormControl(1500),
    'stock': new FormControl(5)
  });
  */

  myForm: FormGroup = this.fb.group({
    name: [ , [ Validators.required, Validators.minLength(3) ] ],
    price: [ , [ Validators.required, Validators.min(0) ] ],
    stock: [ , [ Validators.required, Validators.min(0) ] ]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'RTX 4080ti',
      price: 1500
    })
  }

  isValidField(field: string) {
    return this.myForm.controls[field].errors
        && this.myForm.controls[field].touched;
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
