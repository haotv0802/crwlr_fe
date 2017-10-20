import {Component, OnInit} from "@angular/core";
import {ToasterService} from "angular2-toaster";

@Component({
    selector: 'crwlr-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
    toastList: Array<any> = new Array();
    toastIndex: number = 0;

    constructor(
      private _toasterService: ToasterService,
    ) {
    }

    ngOnInit(): void {
    }

    popToast() {
        let toast = this._toasterService.pop('success', 'Args Title', 'Args Body');
        this.toastList.push(toast);
    }
    clearToast() {
        for (let i = 0; i < this.toastList.length; i++) {
            this._toasterService.clear(this.toastList[i].toastId, this.toastList[i].toastContainerId);
        }
    }
}
