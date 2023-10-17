import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { StudentDilogComponent } from './components/student-dilog/student-dilog.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { apiUrl } from 'src/app/config/url.token';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentDilogComponent,
    StudentTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    StudentsComponent
  ],
  providers: [
    {
      provide: apiUrl,
      useValue: {
        url : 'https://localhost:8080/users'
      }
    }
  ]
})
export class StudentsModule { }
