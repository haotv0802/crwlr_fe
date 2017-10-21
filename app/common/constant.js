"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Constants = /** @class */ (function () {
    function Constants() {
        this.HOST = 'http://localhost:8888/crwlr_be/svc';
        // Toaster types
        this.TOASTER_SUCCESS = "success";
        this.TOASTER_ERROR = "error";
        // HTTP Status
        this.HTTP_STATUS_OK = 200;
        this.HTTP_STATUS_NO_CONTENT = 204;
        this.HTTP_STATUS_BAD_REQUEST = 400;
        this.HTTP_STATUS_UNAUTHORIZED = 401;
        //  Expenses
        this.EXPENSES_SERVICE_URL = this.HOST + '/expenses';
        this.EXPENSES_DETAILS_SERVICE_URL = this.HOST + '/expensesDetails';
        this.EXPENSES_PREVIOUS_SERVICE_URL = this.HOST + '/previousExpensesDetails';
        //  Expenses
        this.CRAWLER_COLLECTED_DATA = this.HOST + '/crawler/crawledData';
        this.CRAWLER_VENDORS = this.HOST + '/crawler/vendors';
        // Names of Components
        this.WELCOME_URL = 'welcome';
    }
    Constants = __decorate([
        core_1.Injectable()
    ], Constants);
    return Constants;
}());
exports.Constants = Constants;
//# sourceMappingURL=constant.js.map