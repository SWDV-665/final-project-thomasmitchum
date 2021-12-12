import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  title = "Add Work Order";
  item = [];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public inputDialogService: InputDialogServiceProvider) {

  }

  addItem(){
    console.log("Adding Item");
    this.inputDialogService.showPrompt();

  }

}
