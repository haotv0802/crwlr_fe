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
var SellerInChartComponent = /** @class */ (function () {
    function SellerInChartComponent(_sellerInChartService) {
        this._sellerInChartService = _sellerInChartService;
        this.loaderOpen = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Time On Lazada (months)', 'Seller size', 'Ship on time'];
        this.barChartTimeOnLazadaLabel = ['Time On Lazada (months)'];
        this.barChartSellerSizeLabel = ['Seller size'];
        this.barChartShipOnTimeLabel = ['Ship on time'];
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
    SellerInChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sellerInChartService.getAllVendors().subscribe(function (data) {
            _this.vendors = data;
            _this.barChartData = [];
            _this.barChartTimeOnLazadaData = [];
            _this.barChartSellerSizeData = [];
            _this.barChartShipOnTimeData = [];
            for (var i = 0; i < _this.vendors.length; i++) {
                var timeOneLazadaData = {
                    data: [
                        _this.vendors[i].timeOnLazada
                    ],
                    label: _this.vendors[i].name
                };
                var sellerSize = {
                    data: [
                        _this.vendors[i].size
                    ],
                    label: _this.vendors[i].name
                };
                var shipOnTimeData = {
                    data: [
                        _this.vendors[i].shipOnTime
                    ],
                    label: _this.vendors[i].name
                };
                _this.barChartTimeOnLazadaData[i] = timeOneLazadaData;
                _this.barChartSellerSizeData[i] = sellerSize;
                _this.barChartShipOnTimeData[i] = shipOnTimeData;
            }
            _this.loaderOpen = false;
            // let timer = Observable.interval(1000);
            // timer.subscribe(
            //   () => {
            //     this.loaderOpen = false;
            //   }
            // );
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