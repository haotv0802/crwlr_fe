import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LocalDataSource} from 'ng2-smart-table';
import {Observable} from "rxjs/Rx";
import {CrawledDataService} from "./crawledData.service";
import {ToasterService} from "angular2-toaster";
import {Constants} from "../../common/constant";

@Component({
  moduleId: module.id,
  templateUrl: 'crawledData.component.html'
})
export class CrawledDataComponent implements OnInit {
  pageTitle: string;
  loaderOpen: boolean = true;
  collectedData: LocalDataSource;
  settings = {
    columns: {
      name: {
        title: 'Name',
        width: '100px',
        editable: false,
        filter: true
      },
      category: {
        title: 'Category',
        width: '100px',
        filter: true
      },
      vendorName: {
        title: 'Vendor',
        width: '100px',
        filter: true
      },
      vendorLocation: {
        title: 'Location',
        width: '70px',
        filter: true
      },
      vendorShipOnTime: {
        title: 'Ship on time',
        width: '70px',
        filter: true
      },
      vendorTimeOnLazada: {
        title: 'Time on Lazada (Months)',
        width: '70px',
        filter: true
      },
      vendorRating: {
        title: 'Rating',
        width: '50px',
        filter: true
      },
      vendorSize: {
        title: 'Seller Size',
        width: '50px',
        filter: true
      },
      vendorPositive: {
        title: 'Positive',
        width: '50px',
        filter: true
      },
      vendorNeutral: {
        title: 'Neutral',
        width: '50px',
        filter: true
      },
      vendorNegative: {
        title: 'Negative',
        width: '50px',
        filter: true
      }
    },
    hideSubHeader: false,
    actions:{
      add: false,
      edit: false,
      delete: false
    },
    delete:{
      confirmDelete: false
    },
    pager : {
      display : true,
      perPage: 10
    }
  };

  constructor(
    private _router: Router,
    private _crawledDataService: CrawledDataService,
    private _toasterService: ToasterService,
    private _constants: Constants
  ) {
    this.pageTitle = 'Collected Data';
  }

  ngOnInit(): void {
    this._crawledDataService.getCollectedData().subscribe(
      (data) => {
        this.collectedData = new LocalDataSource(data);
        let timer = Observable.interval(700);
        timer.subscribe(
          () => {
            this.loaderOpen = false;
          }
        );
      }, (error) => {
        console.log(error);
      }
    );
  }

  public recrawl(): void {
    this.loaderOpen = true;
    console.log('recrawling');
    this._crawledDataService.recrawl().subscribe(
      (data) => {
        console.log(data);
        this._crawledDataService.getCollectedData().subscribe(
          (data) => {
            this.collectedData = new LocalDataSource(data);
            let timer = Observable.interval(500);
            timer.subscribe(
              () => {
                this.loaderOpen = false;
              }
            );
            this._toasterService.pop(this._constants.TOASTER_SUCCESS, 'Data Crawled Successfully');
          }, (error) => {
            console.log(error);
          }
        );
        this.loaderOpen = false;
      }, (error) => {
        console.log(error);
      }
    );
  }
}