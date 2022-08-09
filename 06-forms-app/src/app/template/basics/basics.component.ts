import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
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
    console.log(this.myForm);
  }

}
