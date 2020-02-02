import { Component, OnInit } from "@angular/core";
import { BaseGridComponent } from "../base-grid.component";

@Component({
  selector: "app-row",
  templateUrl: "./row.component.html"
})
export class RowComponent extends BaseGridComponent implements OnInit {
  public ngOnInit() {}
}
