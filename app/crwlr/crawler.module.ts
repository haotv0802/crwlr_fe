import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {CollectedDataComponent} from "./collectedData.component";
import {CollectedDataInChartsComponent} from "./collectedDataInCharts.component";
import {CollectedDataService} from "./collectedData.service";
import {CollectedDataInChartsService} from "./collectedDataInCharts.service";
import {HTCommonModule} from "../common/htCommon.module";
import {ChartsModule} from "ng2-charts";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'collectedData', component: CollectedDataComponent},
      {path: 'collectedDataInCharts', component: CollectedDataInChartsComponent}
    ]),
    CommonModule,
    Ng2SmartTableModule,
    HTCommonModule,
    ChartsModule
  ],
  declarations: [
    CollectedDataComponent,
    CollectedDataInChartsComponent
  ],
  providers: [
    CollectedDataService,
    CollectedDataInChartsService
  ]
})

export class CrawlerModule {
}