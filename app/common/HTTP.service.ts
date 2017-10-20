import {Injectable} from "@angular/core";
import {Constants} from "./constant";
import {Observable} from "rxjs/Observable";
import {Headers, Http, RequestOptions, Response, URLSearchParams} from "@angular/http";

@Injectable()
export class HTTPService {

  constructor(
    private _http: Http,
    private _constants: Constants,
  ) {
  }

  public post(url: string, data: any): Observable<Response> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http.post(url, data, {headers: headers})
      // .catch(this.handleError)
      ;
  }

  public patch(url: string, data?: any): Observable<Response> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http.patch(url, data, {headers: headers})
      // .catch(this.handleError)
      ;
  }

  public delete(url: string): Observable<Response> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http.delete(url, {headers: headers})
      // .catch(this.handleError)
      ;
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