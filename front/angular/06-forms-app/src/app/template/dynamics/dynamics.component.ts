import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Person {
  name: string,
  favorites: Favorite[]
}

interface Favorite {
  id: number,
  name: string
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html'
})
export class DynamicsComponent {

  newFavoriteName: string = '';

  person: Person = {
    name: 'Alex',
    favorites: [
      {
        id: 1,
        name: 'Zelda BOTW'
      },
      {
        id: 2,
        name: 'Stardew Valley'
      }
    ]
  }

  @ViewChild('myForm') myForm!: NgForm;

  isInvalidName() {
    return this.myForm?.controls['name']?.touched
        && this.myForm?.controls['name']?.errors;
  }

  addFavorite() {
    if (this.newFavoriteName === '') return;
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newFavoriteName
    }
    this.person.favorites.push({ ...newFavorite });
    this.newFavoriteName = '';
  }

  removeFavorite(index: number) {
    this.person.favorites.splice(index, 1);
  }

  save() {
    console.log('Correct post');
    this.myForm.resetForm();
  }

}
