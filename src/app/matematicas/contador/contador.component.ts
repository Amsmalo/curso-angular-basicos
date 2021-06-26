import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class AppContador {
  titulo: string = 'Contador App';
  numero: number = 10;

  base: number = 5;

  incrementar(){
    this.numero += this.base;
  }

  decrementar(){
    this.numero -= this.base;
  }  

}