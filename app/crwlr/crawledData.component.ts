import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CrawledDataService} from "./collectedData.service";
import {VendorProductPresenter} from "./vendorProductPresenter";
import {Observable} from "rxjs/Observable";

@Component({
  moduleId: module.id,
  templateUrl: 'crawledData.component.html'
})
export class CrawledDataComponent implements OnInit {
  pageTitle: string;
  loaderOpen: boolean = true;
  collectedData: VendorProductPresenter[];
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
        title: 'Location (Year)',
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
    private _collectedDataService: CrawledDataService
  ) {
    this.pageTitle = 'Collected Data';
  }

  ngOnInit(): void {
    this._collectedDataService.getCollectedData().subscribe(
      (data) => {
        this.collectedData = data;
        let timer = Observable.interval(1000);
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

}