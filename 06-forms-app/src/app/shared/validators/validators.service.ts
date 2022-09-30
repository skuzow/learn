import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public cantBeSkuzow(control: FormControl): ValidationErrors | null {
    const value = control.value?.trim().toLowerCase();
    if (value === 'skuzow') {
      return {
        noSkuzow: true
      }
    }
    return null;
  }

  public sameFields(firstField: string, secondField: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const firstFieldText = formGroup.get(firstField)?.value;
      const secondFieldText = formGroup.get(secondField)?.value;
      if (firstFieldText !== secondFieldText) {
        formGroup.get(secondField)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }
      // purge field errors
      formGroup.get(secondField)?.setErrors(null);
      return null;
    }
  }

}
