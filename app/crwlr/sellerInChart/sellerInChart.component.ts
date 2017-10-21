import {Component, OnInit} from "@angular/core";
import {SellerInChartService} from "./sellerInChart.service";
import {Observable} from "rxjs/Observable";
import {VendorPresenter} from "./vendorPresenter";

@Component({
  moduleId: module.id,
  templateUrl: 'sellerInChart.component.html'
})
export class SellerInChartComponent implements OnInit {
  pageTitle: string;
  loaderOpen: boolean = true;
  vendors: VendorPresenter[];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Time On Lazada (months)', 'Seller size', 'Ship on time'];
  public barChartTimeOnLazadaLabel: string[] = ['Time On Lazada (months)'];
  public barChartSellerSizeLabel: string[] = ['Seller size'];
  public barChartShipOnTimeLabel: string[] = ['Ship on time'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[];
  public barChartTimeOnLazadaData: any[];
  public barChartSellerSizeData: any[];
  public barChartShipOnTimeData: any[];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private _sellerInChartService: SellerInChartService) {
    this.pageTitle = 'Collected Data in Charts';
  }

  ngOnInit(): void {
    this._sellerInChartService.getAllVendors().subscribe(
      (data) => {
        this.vendors = data;
        this.barChartData = [];
        this.barChartTimeOnLazadaData = [];
        this.barChartSellerSizeData = [];
        this.barChartShipOnTimeData = [];
        for(let i = 0; i < this.vendors.length; i++) {
          let timeOneLazadaData = {
            data: [
              this.vendors[i].timeOnLazada
            ],
            label: this.vendors[i].name
          };
          let sellerSize = {
            data: [
              this.vendors[i].size
            ],
            label: this.vendors[i].name
          };
          let shipOnTimeData = {
            data: [
              this.vendors[i].shipOnTime
            ],
            label: this.vendors[i].name
          };
          this.barChartTimeOnLazadaData[i] = timeOneLazadaData;
          this.barChartSellerSizeData[i] = sellerSize;
          this.barChartShipOnTimeData[i] = shipOnTimeData;
        }
        this.loaderOpen = false;
        // let timer = Observable.interval(1000);
        // timer.subscribe(
        //   () => {
        //     this.loaderOpen = false;
        //   }
        // );

      }, (error) => {
        console.log(error);
      }
    );
  }
}
