import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { foodDetails } from 'src/app/Models/foodDetails';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foodDetail = foodDetails;

  constructor(private service: OrderDetailsService) { }
  foodData: any;

  ngOnInit(): void {
  }

}
