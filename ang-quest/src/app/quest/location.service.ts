import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  /**
   * Denne klasse skal tage fat have fat i denne nuværende position
   */

  constructor() { }

  getPosition(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((suc)=>{
        console.log(suc)
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
}
