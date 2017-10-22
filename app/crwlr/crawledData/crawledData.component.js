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
var router_1 = require("@angular/router");
var ng2_smart_table_1 = require("ng2-smart-table");
var crawledData_service_1 = require("./crawledData.service");
var CrawledDataComponent = /** @class */ (function () {
    function CrawledDataComponent(_router, _crawledDataService) {
        this._router = _router;
        this._crawledDataService = _crawledDataService;
        this.loaderOpen = true;
        this.settings = {
            columns: {
                name: {
                    title: 'Name',
                    width: '100px',
                    editable: false,
                    filter: true
                },
                category: {
                    title: 'Category',
                    width: '100px',
                    filter: true
                },
                vendorName: {
                    title: 'Vendor',
                    width: '100px',
                    filter: true
                },
                vendorLocation: {
                    title: 'Location',
                    width: '70px',
                    filter: true
                },
                vendorShipOnTime: {
                    title: 'Ship on time',
                    width: '70px',
                    filter: true
                },
                vendorTimeOnLazada: {
                    title: 'Time on Lazada (Months)',
                    width: '70px',
                    filter: true
                },
                vendorRating: {
                    title: 'Rating',
                    width: '50px',
                    filter: true
                },
                vendorSize: {
                    title: 'Seller Size',
                    width: '50px',
                    filter: true
                },
                vendorPositive: {
                    title: 'Positive',
                    width: '50px',
                    filter: true
                },
                vendorNeutral: {
                    title: 'Neutral',
                    width: '50px',
                    filter: true
                },
                vendorNegative: {
                    title: 'Negative',
                    width: '50px',
                    filter: true
                }
            },
            hideSubHeader: false,
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            delete: {
                confirmDelete: false
            },
            pager: {
                display: true,
                perPage: 10
            }
        };
        this.pageTitle = 'Collected Data';
    }
    CrawledDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._crawledDataService.getCollectedData().subscribe(function (data) {
            _this.collectedData = new ng2_smart_table_1.LocalDataSource(data);
            _this.loaderOpen = false;
        }, function (error) {
            console.log(error);
        });
    };
    CrawledDataComponent.prototype.recrawl = function () {
        var _this = this;
        this.loaderOpen = true;
        // let timer = Observable.interval(1000);
        // timer.subscribe(
        //   () => {
        //     this.loaderOpen = false;
        //   }
        // );
        // console.log('recrawling');
        // Observable.forkJoin(
        //   this._crawledDataService.recrawl(),
        //   this._crawledDataService.getCollectedData()
        // ).subscribe(
        //   (data) => {
        //     console.log(data);
        //     this.loaderOpen = false;
        //     this.collectedData.load(data);
        //     // this.collectedData = data;
        //   }, (error) => {
        //     console.log(error);
        //   }
        // );
        this._crawledDataService.recrawl().subscribe(function (data) {
            console.log(data);
            // this.collectedData.load(data);
            _this.loaderOpen = false;
        }, function (error) {
            console.log(error);
        });
    };
    CrawledDataComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'crawledData.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            crawledData_service_1.CrawledDataService])
    ], CrawledDataComponent);
    return CrawledDataComponent;
}());
exports.CrawledDataComponent = CrawledDataComponent;
//# sourceMappingURL=crawledData.component.js.map