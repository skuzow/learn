import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent {

  person = {
    gender: '',
    notifications: true
  }

  termsConditions: boolean = false;

  @ViewChild('myForm') myForm!: NgForm;

  save() {
    console.log('Correct post');
    this.myForm.resetForm({
      notifications: true
    });
  }

}
