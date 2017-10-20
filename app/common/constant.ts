import {Injectable} from '@angular/core';

@Injectable()
export class Constants {

  public readonly HOST = 'http://localhost:8888/crwlr_be/svc';

  // Toaster types
  public readonly TOASTER_SUCCESS: string = "success";
  public readonly TOASTER_ERROR: string = "error";

  // HTTP Status
  public readonly HTTP_STATUS_OK: number = 200;
  public readonly HTTP_STATUS_NO_CONTENT: number = 204;
  public readonly HTTP_STATUS_BAD_REQUEST: number = 400;
  public readonly HTTP_STATUS_UNAUTHORIZED: number = 401;

  //  Expenses
  public readonly EXPENSES_SERVICE_URL: string = this.HOST + '/expenses';
  public readonly EXPENSES_DETAILS_SERVICE_URL: string = this.HOST + '/expensesDetails';
  public readonly EXPENSES_PREVIOUS_SERVICE_URL: string = this.HOST + '/previousExpensesDetails';

  //  Expenses
  public readonly CRAWLER_COLLECTED_DATA: string = this.HOST + '/crawler/crawledData';

  // Names of Components
  public readonly WELCOME_URL: string = 'welcome';
}