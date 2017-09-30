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

  ionViewDidLoad() {
    this.loadBooks();
  }

  goToAdd() {
    this.navCtrl.push(AddLibroPage);
  }

  loadBooks(refresher = null) {
    this.service.all().subscribe(res => {
      this.data = res;
      if(refresher != null)  refresher.complete();
    });
  }

  doRefresh(refresher) {
    this.loadBooks(refresher);
  }

}
