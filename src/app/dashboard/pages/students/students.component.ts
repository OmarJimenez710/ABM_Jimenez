import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDilogComponent } from './components/student-dilog/student-dilog.component';
import { FormGroup } from '@angular/forms';
import { Student } from './models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  name : string = '';
  lastName : string = '';
  email : string = '';

  student : Student[] = [
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
  ];

  constructor(
    private studentDialog : MatDialog
  ){}

  addStudent() : void {
    this.studentDialog.open(StudentDilogComponent).afterClosed().subscribe({
      next: (v) => {
        if(!!v){
          this.student = [
            ...this.student,
            {
              ...v,
              id: new Date().getTime()
            }
          ]
        }
      }
    });
  }

  editStudent(student : Student){
    this.studentDialog.open(StudentDilogComponent,{
      data: student
    }).afterClosed().subscribe({
      next : (newData) =>{
        this.student = this.student.map((oldData) => oldData.id == student.id? 
        {...oldData, ...newData} : oldData)
      }
    });
  }

  deleteStudent(idStudent : number){
    this.student = this.student.filter((u) => u.id !== idStudent);
  }

}
