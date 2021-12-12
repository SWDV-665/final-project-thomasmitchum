import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { Component } from '@angular/core';


/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  showPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? "Edit Work Order" : "Add Work Order",
      message: item ? "Please edit Work Order" : "Please enter Work Order",
      inputs: [
        {
          name: 'fName',
          placeholder: 'First Name',
          value: item ? item.fName : null
        },
        {
          name: 'lName',
          placeholder: 'Last Name',
          value: item ? item.lName : null
        },
        {
          name: 'phoneNumber',
          placeholder: 'Phone Number',
          type: 'number',
          value: item ? item.phoneNumber : null
        },
        {
          name: 'address',
          placeholder: 'Address',
          value: item ? item.address : null
        },
        {
          name: 'city',
          placeholder: 'City',
          value: item ? item.city : null
        },
        {
          name: 'state',
          placeholder: 'State',
          value: item ? item.state : null
        },        {
          name: 'zipcode',
          placeholder: 'Zipcode',
          value: item ? item.zipcode : null
        },
        {
          name: 'problem',
          placeholder: 'Discription of Problem',
          value: item ? item.problem : null
        },
        {
          name: 'dateEntered',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12',
          value: item ? item.date : null
        },
        {
          name: 'assignedTechnician',
          placeholder: 'Assign',
          value: item ? item.assignedTechnician : null
        },
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log('Clicked Cancle');
          }
        },
        {
          text: "Save",
          handler: data => {
            console.log('Saved Handler', data);
            if (index !== undefined) {
              item.name = data.name;
              item.quantity = data.quantity;
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(data);
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
