import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// Add BarcodeScanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // store the scanned result
  num: string;

  // DI barcodeScanner
  constructor(public navCtrl: NavController, 
    private barcodeScanner: BarcodeScanner) {

  }
  
  // new scan method
  scan() {
    this.barcodeScanner.scan().then(data => {
        // this is called when a barcode is found
        this.num = data.text
      });      
  }
}
