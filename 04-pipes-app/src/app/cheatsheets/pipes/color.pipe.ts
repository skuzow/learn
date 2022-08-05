import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/sales.interface';


@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(colorCode: number): string {
    return Color[colorCode];
  }

}
