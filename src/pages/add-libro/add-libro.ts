import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Libro, LibroProvider } from '../../providers/libro/libro';

@Component({
  selector: 'page-add-libro',
  templateUrl: 'add-libro.html',
})
export class AddLibroPage {

  libro:Libro;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.libro = new Libro();
  }

  save(){
    this.navCtrl.pop();
  }
  

}
