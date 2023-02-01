import { Injectable } from '@angular/core';
import { foodDetails } from '../Models/foodDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  foodDetails:any;
  foodData= foodDetails;

  constructor() { }

  
}
