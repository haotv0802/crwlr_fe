import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: 'sellerInChart.component.html'
})
export class SellerInChartComponent implements OnInit {
  pageTitle: string;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Time On Lazada', 'Seller size', 'Ship on time'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [65, 59, 80], label: 'Series A'},
    {data: [28, -28, 40], label: 'Series B'},
    {data: [38, -8, 65], label: 'Series C'}
  ];

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

  constructor(private _router: Router,) {
    this.pageTitle = 'Collected Data in Charts';
  }

  ngOnInit(): void {
  }

}
