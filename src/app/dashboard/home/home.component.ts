import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cargando : boolean = false;

  constructor(){
    //INTRODUCCIÓN A LA PROGRAMACIÓN ASINCRONA }
    this.cargando = true;

    const getUser = new Promise((res, rej)=>{
      const user = [{
        name : 'goku',
        lastname : 'son',
        power : 1000
      }];

      setTimeout(()=>{
        rej(user);
      },5000)
    });

    getUser.then((res)=>{ 
      console.log(res);
    }).catch((e)=>{
      console.log(e);
    }).finally(()=>{
      this.cargando = false;
    })
  }
}
