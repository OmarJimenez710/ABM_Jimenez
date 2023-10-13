import { Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/app/dashboard/pages/students/models';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): unknown {

    let arg = args[0];
    let result = `${value.name} ${value.lastname}`;

    switch(arg){
      case 'lowercase':
        return result.toLowerCase();
        break;
      case 'uppercase':
        return result.toUpperCase();
        break;
      default:
        return result;
    }
  }
}
