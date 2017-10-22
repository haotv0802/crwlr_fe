import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {VendorProductPresenter} from "./vendorProductPresenter";
import {HTTPService} from "../../common/HTTP.service";
import {Constants} from "../../common/constant";

@Injectable()
export class CrawledDataService {

  constructor(
    private _httpService: HTTPService,
    private _constants: Constants) {
  }

  getCollectedData(): Observable<VendorProductPresenter[]> {
    return this._httpService.get(this._constants.CRAWLER_COLLECTED_DATA)
      .map((res) => { return <VendorProductPresenter[]> res.json(); })
      ;
  }

  recrawl(): Observable<any> {
    return this._httpService.get(this._constants.CRAWLER_CRAWLING_DATA)
      .map((res) => { return <any> res.json(); })
      ;
  }
}
