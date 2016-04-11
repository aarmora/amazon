System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var dev_account_number, access_key, secret_key, seller_id, market_id, OrderService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            dev_account_number = '5192-3986-2937';
            access_key = 'AKIAJ3Y3D7TURCK7CTVQ';
            secret_key = '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';
            seller_id = 'A1M80N3KUQHOY0';
            market_id = 'ATVPDKIKX0DER';
            OrderService = (function () {
                function OrderService(http) {
                    this.http = http;
                }
                OrderService.prototype.getOrders = function () {
                    var endpoint = "https://mws.amazonservices.jp/Orders/2013-09-01\n  ?AWSAccessKeyId=" + access_key + "\n  &Action=ListOrders\n  &MarketplaceId.Id.1=" + market_id;
                    return this.http
                        .get("http://localhost:8082/pizzas");
                };
                OrderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], OrderService);
                return OrderService;
            }());
            exports_1("OrderService", OrderService);
        }
    }
});
//# sourceMappingURL=order.service.js.map