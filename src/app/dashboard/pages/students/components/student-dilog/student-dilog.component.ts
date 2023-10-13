import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models';

@Component({
  selector: 'app-student-dilog',
  templateUrl: './student-dilog.component.html',
  styleUrls: ['./student-dilog.component.scss']
})
export class StudentDilogComponent {
  userForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    public matDialogRef : MatDialogRef<StudentDilogComponent>,
    @Inject(MAT_DIALOG_DATA) public student : Student,
  ){
    this.userForm = this.fb.group({
      name : ['', Validators.required],
      lastname : ['', Validators.required],
      email : ['', [Validators.required, Validators.email, Validators.minLength(10)]]
    })

    if(student){
      this.userForm.patchValue(student);
    }
  }

  onSubmit() : void {
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.userForm.value);
    }
  }
}
