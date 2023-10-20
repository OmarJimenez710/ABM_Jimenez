import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { myCustomNotification } from './models/myCustomNOtification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifier$ = new Subject<myCustomNotification>();

  constructor() {
    this.notifier$.subscribe({
      next: (myNotification)=>{
        Swal.fire(myNotification.title, myNotification.message, "success");
      }
    })
  }

  showSuccess(title : string, message : string) : void {
    this.notifier$.next({
      type: 'success', 
      message,
      title
    })
  }
}
