import { Component, OnInit } from "@angular/core";
import { BaseGridComponent } from "../base-grid.component";

@Component({
  templateUrl: "./row.component.html"
})
export class RowComponent extends BaseGridComponent implements OnInit {
  public ngOnInit() {}
}
