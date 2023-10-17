import { Injectable } from '@angular/core';
import { Student } from './models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() {}

  getStudents() : Student[] {
    return [
      {
        id: 1,
        name : 'Naruto',
        lastname : 'Uzumaki',
        email : 'rasengan@gmail.com'
      },
      {
        id: 2,
        name : 'Sasuke',
        lastname : 'Uchiha',
        email : 'chidori@gmail.com'
      }
    ]
  }
}
