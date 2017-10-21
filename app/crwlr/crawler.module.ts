import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {HTCommonModule} from "../common/htCommon.module";
import {ChartsModule} from "ng2-charts";
import {SellerInChartComponent} from "./sellerInChart/sellerInChart.component";
import {SellerInChartService} from "./sellerInChart/sellerInChart.service";
import {CrawledDataComponent} from "./crawledData/crawledData.component";
import {CrawledDataService} from "./crawledData/crawledData.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'collectedData', component: CrawledDataComponent},
      {path: 'collectedDataInCharts', component: SellerInChartComponent}
    ]),
    CommonModule,
    Ng2SmartTableModule,
    HTCommonModule,
    ChartsModule
  ],
  declarations: [
    CrawledDataComponent,
    SellerInChartComponent
  ],
  providers: [
    CrawledDataService,
    SellerInChartService
  ]
})

export class CrawlerModule {
}