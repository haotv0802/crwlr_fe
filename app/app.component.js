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
var angular2_toaster_1 = require("angular2-toaster");
var AppComponent = /** @class */ (function () {
    function AppComponent(_toasterService) {
        this._toasterService = _toasterService;
        this.toastList = new Array();
        this.toastIndex = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.popToast = function () {
        var toast = this._toasterService.pop('success', 'Args Title', 'Args Body');
        this.toastList.push(toast);
    };
    AppComponent.prototype.clearToast = function () {
        for (var i = 0; i < this.toastList.length; i++) {
            this._toasterService.clear(this.toastList[i].toastId, this.toastList[i].toastContainerId);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'crwlr-app',
            templateUrl: 'app/app.component.html'
        }),
        __metadata("design:paramtypes", [angular2_toaster_1.ToasterService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map