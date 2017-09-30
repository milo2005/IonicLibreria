import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Libro, LibroProvider } from '../../providers/libro/libro';


@Component({
  selector: 'page-add-libro',
  templateUrl: 'add-libro.html',
})
export class AddLibroPage {

  libro: Libro;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: LibroProvider, public toastCtrl: ToastController) {
    this.libro = new Libro();
  }

  save() {

    this.service.insert(this.libro)
      .subscribe(res => {
        if (res.success) {
          this.showToast("Libro insertado !");
          this.navCtrl.pop();
        } else {
          this.showToast("Error al insertar libro");
        }
      });


  }


  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
