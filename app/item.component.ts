import { Component, OnInit } from 'angular2/core';

import { Router } from 'angular2/router';

@Component({
  selector: 'item',
  templateUrl: 'app/views/item.component.html',
  styleUrls: ['app/styles/item.component.css']
})
export class ItemComponent implements OnInit {
  constructor(
	  private _router: Router
    ) {
	}
  ngOnInit() {
    console.log("you have reached the item page");
  }
}

