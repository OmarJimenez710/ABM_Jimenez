import { Injectable } from '@angular/core';
import { Student } from './models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() {
    this.sendNotification$.subscribe({
      next: (message) => {
        alert(message);
      }
    })
  }

  /*getStudents() : Student[] {
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
  }*/

  private users : Student[] = [
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

  loadUser() : void {
    this.user$.next(this.users);
  }

  private user$ = new BehaviorSubject<Student[]>([]);

  getStudent(): Subject<Student[]>{
    return this.user$;
  }

  private sendNotification$ = new Subject<string>();

  sendNotification(notification : string) : void{
    this.sendNotification$.next(notification);
  }
}
