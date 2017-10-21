import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {CrawledDataComponent} from "./crawledData.component";
import {CollectedDataInChartsComponent} from "./collectedDataInCharts.component";
import {CrawledDataService} from "./collectedData.service";
import {CollectedDataInChartsService} from "./collectedDataInCharts.service";
import {HTCommonModule} from "../common/htCommon.module";
import {ChartsModule} from "ng2-charts";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'collectedData', component: CrawledDataComponent},
      {path: 'collectedDataInCharts', component: CollectedDataInChartsComponent}
    ]),
    CommonModule,
    Ng2SmartTableModule,
    HTCommonModule,
    ChartsModule
  ],
  declarations: [
    CrawledDataComponent,
    CollectedDataInChartsComponent
  ],
  providers: [
    CrawledDataService,
    CollectedDataInChartsService
  ]
})

export class CrawlerModule {
}