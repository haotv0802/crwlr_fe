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
var LoaderModalComponent = /** @class */ (function () {
    function LoaderModalComponent() {
        this.opening = false;
        this.loaderClicked = new core_1.EventEmitter();
    }
    LoaderModalComponent.prototype.ngOnChanges = function () {
        // console.log("LoaderComponent, ngOnChanges " + this.opening);
    };
    LoaderModalComponent.prototype.onClick = function () {
        // this.loaderClicked.emit(`The rating ${this.isShown} was clicked!`);
        console.log(this.opening);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LoaderModalComponent.prototype, "opening", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], LoaderModalComponent.prototype, "loaderClicked", void 0);
    LoaderModalComponent = __decorate([
        core_1.Component({
            selector: 'loader-modal',
            moduleId: module.id,
            templateUrl: 'loader.modal.component.html',
            styleUrls: ['fountain.component.css', 'bubbling.component.css']
        })
    ], LoaderModalComponent);
    return LoaderModalComponent;
}());
exports.LoaderModalComponent = LoaderModalComponent;
//# sourceMappingURL=loader.modal.component.js.map