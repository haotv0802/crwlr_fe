import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {WelcomeComponent} from "./common/home/welcome.component";
import {NavComponent} from "./nav.component";
import {Constants} from "./common/constant";
import {HTTPService} from "./common/HTTP.service";
import {HTCommonModule} from "./common/htCommon.module";
import {ToasterModule} from "angular2-toaster";
import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import {FmModule} from "./fm/fm.module";
import {CrawlerModule} from "./crwlr/crawler.module";
import {ChartsModule} from "ng2-charts";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      // {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    FmModule,
    CrawlerModule,
    HTCommonModule,
    ToasterModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent
  ],
  providers: [
    Constants,
    HTTPService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
