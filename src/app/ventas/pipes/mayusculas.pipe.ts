import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name : "mayusculas"
})
export class MayusculasPipe implements PipeTransform{

    transform(string:string, mayus : boolean): string {
        return (mayus == true)? string.toUpperCase() : string.toLowerCase();
    }


}
