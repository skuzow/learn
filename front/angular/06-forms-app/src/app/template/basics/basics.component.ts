import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product: 'Something',
    price: 0,
    stock: 0
  }

  isInvalidName() {
    return this.myForm?.controls['product']?.touched
        && this.myForm?.controls['product']?.invalid;
  }

  isInvalidPrice() {
    return this.myForm?.controls['price']?.touched
        && this.myForm?.controls['price']?.value < 0;
  }

  save() {
    console.log('Correct post');
    this.myForm.resetForm(this.initForm);
  }

}
