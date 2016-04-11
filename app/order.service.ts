import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';

const dev_account_number = '5192-3986-2937';
const access_key = 'AKIAJ3Y3D7TURCK7CTVQ';
const secret_key = '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';
const seller_id = 'A1M80N3KUQHOY0';
const market_id = 'ATVPDKIKX0DER';

@Injectable()
export class OrderService {
	constructor(private http: Http) {}

  getOrders() {
    const endpoint = `https://mws.amazonservices.jp/Orders/2013-09-01
  ?AWSAccessKeyId=${access_key}
  &Action=ListOrders
  &MarketplaceId.Id.1=${market_id}`;

    
    return this.http
      .get("http://localhost:8082/pizzas");     

  }

}
