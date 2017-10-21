"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var ng2_smart_table_1 = require("ng2-smart-table");
var htCommon_module_1 = require("../common/htCommon.module");
var ng2_charts_1 = require("ng2-charts");
var sellerInChart_component_1 = require("./sellerInChart/sellerInChart.component");
var sellerInChart_service_1 = require("./sellerInChart/sellerInChart.service");
var crawledData_component_1 = require("./crawledData/crawledData.component");
var crawledData_service_1 = require("./crawledData/crawledData.service");
var CrawlerModule = /** @class */ (function () {
    function CrawlerModule() {
    }
    CrawlerModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'collectedData', component: crawledData_component_1.CrawledDataComponent },
                    { path: 'sellerInCharts', component: sellerInChart_component_1.SellerInChartComponent }
                ]),
                common_1.CommonModule,
                ng2_smart_table_1.Ng2SmartTableModule,
                htCommon_module_1.HTCommonModule,
                ng2_charts_1.ChartsModule
            ],
            declarations: [
                crawledData_component_1.CrawledDataComponent,
                sellerInChart_component_1.SellerInChartComponent
            ],
            providers: [
                crawledData_service_1.CrawledDataService,
                sellerInChart_service_1.SellerInChartService
            ]
        })
    ], CrawlerModule);
    return CrawlerModule;
}());
exports.CrawlerModule = CrawlerModule;
//# sourceMappingURL=crawler.module.js.map