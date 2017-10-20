import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: 'collectedData.component.html'
})
export class CollectedDataComponent implements OnInit {
  pageTitle: string;

  constructor(
    private _router: Router,
  ) {
    this.pageTitle = 'Collected Data';
  }

  ngOnInit(): void {

  }

}
