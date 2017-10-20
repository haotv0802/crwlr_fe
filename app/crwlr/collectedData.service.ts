import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Constants} from "../common/constant";
import {HTTPService} from "../common/HTTP.service";
import {VendorProductPresenter} from "./vendorProductPresenter";

@Injectable()
export class CollectedDataService {

  constructor(
    private _httpService: HTTPService,
    private _constants: Constants) {
  }

  getCollectedData(): Observable<VendorProductPresenter[]> {
    return this._httpService.get(this._constants.CRAWLER_COLLECTED_DATA)
      .map((res) => { return <VendorProductPresenter[]> res.json(); })
      ;
  }
}
