import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Constants} from "../../common/constant";
import {HTTPService} from "../../common/HTTP.service";
import {VendorPresenter} from "./vendorPresenter";

@Injectable()
export class SellerInChartService {

  constructor(
    private _httpService: HTTPService,
    private _constants: Constants) {
  }

  getAllVendors(): Observable<VendorPresenter[]> {
    return this._httpService.get(this._constants.CRAWLER_VENDORS)
      .map((res) => { return <VendorPresenter[]> res.json(); })
      ;
  }
}
