import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { FoodType } from 'src/app/Models/foodType';
import { foodDetails } from 'src/app/Models/foodDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foodDetail = foodDetails;

  constructor(private service: OrderDetailsService) { }
  foodData: any;

  ngOnInit(): void {

  }

}
