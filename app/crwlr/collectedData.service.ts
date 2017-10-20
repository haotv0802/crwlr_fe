import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Constants} from "../common/constant";
import {HTTPService} from "../common/HTTP.service";

@Injectable()
export class CollectedDataService {

  constructor(
    private _httpService: HTTPService,
    private _constants: Constants) {
  }
}
