import { Component }       from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { DashboardComponent } from './dashboard.component';
import { ItemComponent } from './item.component';
import { OrderService } from './order.service';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/app.component.html',
  styleUrls: ['app/styles/app.component.css'],


  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    OrderService
  ]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/item',
    name: 'Item',
    component: ItemComponent
  },
])


export class AppComponent {
  title = 'Tour of Heroes';
}
