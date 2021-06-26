import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Ironman','Hulk','Superman'];
  heroeborrado: number = -1;
  heroe: string = '';
  borradoExito: boolean = false;
  borrarHeroe(): void{
    console.log('Borrando...' + this.heroeborrado);
    this.heroe = this.heroes[this.heroeborrado];
    console.log(this.heroe);
    if(this.heroe != null){
       this.heroes.splice(0,1);
       this.borradoExito = true;
    }else{      
      this.borradoExito = false;
    }
  }
}
