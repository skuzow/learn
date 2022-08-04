import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayus'
})
export class MayusPipe implements PipeTransform {

    transform(value: string, mayus: boolean = true): string {
        return mayus
                ? value.toUpperCase()
                : value.toLowerCase();
    }

}
