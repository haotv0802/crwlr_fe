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
var crawledData_component_1 = require("./crawledData.component");
var collectedDataInCharts_component_1 = require("./collectedDataInCharts.component");
var collectedData_service_1 = require("./collectedData.service");
var collectedDataInCharts_service_1 = require("./collectedDataInCharts.service");
var htCommon_module_1 = require("../common/htCommon.module");
var ng2_charts_1 = require("ng2-charts");
var CrawlerModule = /** @class */ (function () {
    function CrawlerModule() {
    }
    CrawlerModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'collectedData', component: crawledData_component_1.CrawledDataComponent },
                    { path: 'collectedDataInCharts', component: collectedDataInCharts_component_1.CollectedDataInChartsComponent }
                ]),
                common_1.CommonModule,
                ng2_smart_table_1.Ng2SmartTableModule,
                htCommon_module_1.HTCommonModule,
                ng2_charts_1.ChartsModule
            ],
            declarations: [
                crawledData_component_1.CrawledDataComponent,
                collectedDataInCharts_component_1.CollectedDataInChartsComponent
            ],
            providers: [
                collectedData_service_1.CrawledDataService,
                collectedDataInCharts_service_1.CollectedDataInChartsService
            ]
        })
    ], CrawlerModule);
    return CrawlerModule;
}());
exports.CrawlerModule = CrawlerModule;
//# sourceMappingURL=crawler.module.js.map