import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy{
  cargando : boolean = false;
  clockSuscription : Subscription;

  constructor(){
    this.getUser();

    this.clockSuscription = this.getClock().subscribe({
      next: (v)=>{
        console.log(v);
      },
      error: (err)=>{
        console.log("ocurrio un error");
      },
      complete: ()=>{
        console.log("finalizo el contador");
      }
    })

    this.getClock().subscribe({
      next: (v)=>{
        console.log("segunda suscripcion");
      }
    })
  }

  ngOnDestroy(): void {
    console.log("SE DESTRUYO EL HOME");
    
    this.clockSuscription.unsubscribe();
  }


  getClock() : Observable<number> {
    return new Observable((subscriber)=>{
      let counter = 0;

      setInterval(()=>{
        counter ++;
        subscriber.next(counter);

        if(counter == 10){
          subscriber.complete();
        }
      },1000);
    })
  }

  async getUser() : Promise<void> {
    this.cargando = true;
    const getUserPromise = new Promise((res, rej)=>{
      const user = [{
        name : 'goku',
        lastname : 'son',
        power : 1000
      }];
  
      setTimeout(()=>{
        rej(user);
      },5000)
    });

    await getUserPromise.then((res)=>{
      console.log(res);
    }).catch((e)=>{
      console.log("ocurrio un error " + e);
    }).finally(()=>{
      this.cargando=false;
    });

    console.log("hola mundo");
  }
}

