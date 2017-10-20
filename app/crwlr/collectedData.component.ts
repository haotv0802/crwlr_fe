import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CollectedDataService} from "./collectedData.service";
import {VendorProductPresenter} from "./vendorProductPresenter";
import {Observable} from "rxjs/Observable";

@Component({
  moduleId: module.id,
  templateUrl: 'collectedData.component.html'
})
export class CollectedDataComponent implements OnInit {
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
      vendorTimeOnLazada: {
        title: 'Time on Lazada (Year)',
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
      perPage: 15
    }
  };

  constructor(
    private _router: Router,
    private _collectedDataService: CollectedDataService
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
