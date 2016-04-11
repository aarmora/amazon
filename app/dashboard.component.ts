import { Component, OnInit } from 'angular2/core';

import { OrderService } from './order.service';

import { Router } from 'angular2/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/views/dashboard.component.html',
  styleUrls: ['app/styles/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders: Object[] = [];
  constructor(
	  private _router: Router,
    private _orderService: OrderService
    ) {
	}
  ngOnInit() {
    
    console.log("you have reached the dashboard");
    
    this._orderService.getOrders()
    .subscribe(res => {this.orders = res.json()});
    
    console.log(this.orders);
    
  }
}

