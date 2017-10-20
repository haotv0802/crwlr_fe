import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import Chart from 'chart.js';

@Component({
  moduleId: module.id,
  templateUrl: 'collectedDataInCharts.component.html'
})
export class CollectedDataInChartsComponent implements OnInit {
  pageTitle: string;

  constructor(
    private _router: Router,
  ) {
    this.pageTitle = 'Collected Data in Charts';
  }
  ngOnInit(): void {
  }

}
