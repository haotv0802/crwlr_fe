import {Injectable} from '@angular/core';

@Injectable()
export class Constants {

  public readonly HOST = 'http://localhost:8888/crwlr_be/svc';

  // Toaster types
  public readonly TOASTER_SUCCESS: string = "success";
  public readonly TOASTER_ERROR: string = "error";

  //  Expenses
  public readonly CRAWLER_COLLECTED_DATA: string = this.HOST + '/crawler/crawledData';
  public readonly CRAWLER_CRAWLING_DATA: string = this.HOST + '/crawler/crawlingData';
  public readonly CRAWLER_VENDORS: string = this.HOST + '/crawler/vendors';

}