import { Component, OnInit } from "@angular/core";

import { RxjsService } from "./core/services/rxjs.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  count: number;
  data: any;

  constructor(private rxjsService: RxjsService) {
    this.count = 0;
  }

  ngOnInit() {
    this.rxjsService.observableWithOperators.subscribe(data => {
      this.data = data;
    });
  }

  onClickNextSubject() {
    this.count = this.count + 1;
    this.rxjsService.next(this.count);
  }
}
