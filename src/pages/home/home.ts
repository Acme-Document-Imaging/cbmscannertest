import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var cmbScanner:any; 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    //mwbScanner.setCallback(function(result){});
  }

  goScan()
  {
    debugger;

    if(typeof cmbScanner != 'undefined' && typeof cmbScanner.startScanning != 'undefined'){

    alert("Scan click");
    cmbScanner.startScanning().then(function(response){
      console.log('show the result here');
      console.log(response);
      //actual example in home.ts is different
    });
  }
  else
  {
    alert("Not Defined");
  }


  };

}
