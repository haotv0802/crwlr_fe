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
import {CrawlerModule} from "./crwlr/crawler.module";
import {ExpensesModule} from "./fm/expenses/expenses.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      // {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    CrawlerModule,
    HTCommonModule,
    ToasterModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    ExpensesModule
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
