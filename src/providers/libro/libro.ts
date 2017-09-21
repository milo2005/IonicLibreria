import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LibroProvider {

  constructor(public http: Http) {
    console.log('Hello LibroProvider Provider');
  }

}

export class Libro {
  _id: string;
  nombre:string;
  autor:string;
  paginas:number;  
}