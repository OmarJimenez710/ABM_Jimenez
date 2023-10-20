import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDilogComponent } from './components/student-dilog/student-dilog.component';
import { FormGroup } from '@angular/forms';
import { Student } from './models';
import { StudentsService } from './students.service';
import { ApiUrlConfig, apiUrl } from 'src/app/config/url.token';
import { NotificationService } from 'src/app/services/notification.service';
import { Observable, filter, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  name : string = '';
  lastName : string = '';
  email : string = '';

  //student : Student[] = [];
  student : Observable<Student[]>;

  constructor(
    @Inject(apiUrl) private url : ApiUrlConfig,
    private studentDialog : MatDialog,
    private studentService : StudentsService,
    private notificationService : NotificationService
  ){
    console.log("La url inyectada es :" + this.url.url);
    //this.student = this.studentService.getStudents();

    //operador of para unicamente numeros
    of(1,2,3,4,5).pipe(
      tap((valor)=> console.log(valor)),
      /*map((valor)=> console.log("Valor mapeado ", valor * 2)),
      tap((valorNuevo)=> console.log("Valor despues del mapeo ", valorNuevo)),*/
      filter(v => v < 2)
    ).subscribe({});

    //operador of para array
    of([1,2,3,4,5]).pipe(
      tap((valor)=>console.log(valor)),
      map(v => (v.map((numero)=> console.log("array mapeado ", numero*2)))),
      tap((val)=> console.log("valor con mapeo ", val)),
      //filter(v => (v.filter((numero)=> console.log(numero<2)))))
    ).subscribe({})



    this.student = this.studentService.getStudent();
    this.studentService.loadUser();
   
    /*this.studentService.getStudent().subscribe({
      next: (v)=>{
        this.student = v;
        //this.studentService.sendNotification("se cargaron los usuarios");
        this.notificationService.showSuccess("Exito", "Se cargaron los ususarios correctamente");
      }
    })*/


  }

  /*addStudent() : void {
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
  }*/
}
