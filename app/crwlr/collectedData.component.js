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
var collectedData_service_1 = require("./collectedData.service");
var CollectedDataComponent = /** @class */ (function () {
    function CollectedDataComponent(_router, _collectedDataService) {
        this._router = _router;
        this._collectedDataService = _collectedDataService;
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
                vendorTimeOnLazada: {
                    title: 'Time on Lazada (Year)',
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
    CollectedDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._collectedDataService.getCollectedData().subscribe(function (data) {
            _this.collectedData = data;
        }, function (error) {
            console.log(error);
        });
    };
    CollectedDataComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'collectedData.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            collectedData_service_1.CollectedDataService])
    ], CollectedDataComponent);
    return CollectedDataComponent;
}());
exports.CollectedDataComponent = CollectedDataComponent;
//# sourceMappingURL=collectedData.component.js.map