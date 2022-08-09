import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Hero } from '../../interfaces/heroes.interface';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent {

  constructor(
    private dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) { }

  delete() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close();
  }

}
