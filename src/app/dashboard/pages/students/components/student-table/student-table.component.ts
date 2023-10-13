import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styles: [
  ]
})
export class StudentTableComponent {

  @Input()
    dataSource : Student[] = [];

  @Output()
    deleteUser = new EventEmitter<number>();

  @Output()
    editUser = new EventEmitter<Student>();

  displayedColumns = ['id','fullname','email','actions'];
}
