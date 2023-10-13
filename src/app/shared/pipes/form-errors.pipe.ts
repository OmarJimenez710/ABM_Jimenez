import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formErrors'
})
export class FormErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors | null | undefined, ...args: unknown[]): unknown {
    console.log(value);

    const errorMessages : string[] = [];  

    if(!value){
      return '';
    }

    if('required' in value){
      errorMessages.push("El campo es requerido");
    }
    if('minlenth' in value){
      errorMessages.push("El campo es requerido");
    }
    if('email' in value){
      errorMessages.push("Email inválido");
    }

    if('minlength' in value){
      errorMessages.push("El largo minimo es " + value['minlength'].requiredLength);
    }

    return errorMessages.join(" . ");
  }
}
