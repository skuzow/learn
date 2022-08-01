import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input('newData') new: Character = {
    name: '',
    power: 0
  }

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add() {
    if (this.new.name.trim().length === 0) return
    this.onNewCharacter.emit(this.new);
    this.new = {
      name: '',
      power: 0
    }
  }

}
