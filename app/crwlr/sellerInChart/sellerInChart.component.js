"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sellerInChart_service_1 = require("./sellerInChart.service");
var Observable_1 = require("rxjs/Observable");
var SellerInChartComponent = /** @class */ (function () {
    function SellerInChartComponent(_sellerInChartService) {
        this._sellerInChartService = _sellerInChartService;
        this.loaderOpen = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Time On Lazada (months)', 'Seller size', 'Ship on time'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.pageTitle = 'Collected Data in Charts';
    }
    // events
    SellerInChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    SellerInChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    SellerInChartComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    SellerInChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sellerInChartService.getAllVendors().subscribe(function (data) {
            _this.vendors = data;
            console.log(_this.vendors);
            _this.barChartData = [];
            for (var i = 0; i < _this.vendors.length; i++) {
                console.log(_this.vendors[i]);
                var json = {
                    data: [
                        _this.vendors[i].timeOnLazada, _this.vendors[i].size, _this.vendors[i].shipOnTime
                    ],
                    label: _this.vendors[i].name
                };
                _this.barChartData[i] = json;
            }
            // this.barChartData = [
            //   {data: [65, 59, 80], label: 'Series A'},
            //   {data: [28, -28, 40], label: 'Series B'},
            //   {data: [38, -8, 65], label: 'Series C'}
            // ];
            var timer = Observable_1.Observable.interval(1000);
            timer.subscribe(function () {
                _this.loaderOpen = false;
            });
        }, function (error) {
            console.log(error);
        });
    };
    SellerInChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'sellerInChart.component.html'
        }),
        __metadata("design:paramtypes", [sellerInChart_service_1.SellerInChartService])
    ], SellerInChartComponent);
    return SellerInChartComponent;
}());
exports.SellerInChartComponent = SellerInChartComponent;
//# sourceMappingURL=sellerInChart.component.js.map