import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Headers, Http, RequestOptions, Response, URLSearchParams} from "@angular/http";

@Injectable()
export class HTTPService {

  constructor(
    private _http: Http
  ) {
  }

  public get(url: string, params?: URLSearchParams): Observable<Response> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let requestOptions: RequestOptions = new RequestOptions();
    requestOptions.headers = headers;
    requestOptions.params = params;
    return this._http.get(url, requestOptions)
      .catch(this.handleError)
    ;
  }

  private handleError(error: Response) {
    console.error("Error logged in HTTPService: ");
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}