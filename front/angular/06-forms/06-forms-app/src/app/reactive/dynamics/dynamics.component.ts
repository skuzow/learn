import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html'
})
export class DynamicsComponent {

  myForm: FormGroup = this.fb.group({
    name: [ , [ Validators.required, Validators.minLength(3) ] ],
    favorites: this.fb.array(
      [
        [ 'Metal Gear', Validators.required ],
        [ 'Death Stranding', Validators.required ]
      ],
      Validators.required
    )
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  get favorites() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  isInvalidField(field: string) {
    return this.myForm.controls[field].touched
        && this.myForm.controls[field].errors;
  }

  addFavorite() {
    if (this.newFavorite.invalid) return;
    this.favorites.push(this.fb.control(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }

  deleteFavorite(index: number) {
    this.favorites.removeAt(index);
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
