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
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  constructor(private _sellerInChartService: SellerInChartService) {
    this.pageTitle = 'Collected Data in Charts';
  }

  ngOnInit(): void {
    this._sellerInChartService.getAllVendors().subscribe(
      (data) => {
        this.vendors = data;
        console.log(this.vendors);
        this.barChartData = [];
        for(let i = 0; i < this.vendors.length; i++) {
          console.log(this.vendors[i]);
          let json = {
            data: [
                this.vendors[i].timeOnLazada, this.vendors[i].size, this.vendors[i].shipOnTime
            ],
            label: this.vendors[i].name
          };
          this.barChartData[i] = json;
        }
        // this.barChartData = [
        //   {data: [65, 59, 80], label: 'Series A'},
        //   {data: [28, -28, 40], label: 'Series B'},
        //   {data: [38, -8, 65], label: 'Series C'}
        // ];
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
