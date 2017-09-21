import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddLibroPage } from '../add-libro/add-libro';
import { Libro, LibroProvider } from '../../providers/libro/libro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: Libro[] = [];

  constructor(public navCtrl: NavController, public service: LibroProvider) {
  }

  goToAdd() {
    this.navCtrl.push(AddLibroPage);
  }

}
