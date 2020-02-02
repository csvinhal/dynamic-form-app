import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { GridConfigType } from "./grid/configuration/grid-config";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss"]
})
export class DynamicFormComponent implements OnInit {
  @Input()
  public dynamicConfigs: GridConfigType[];
  @Input()
  public formGroup: FormGroup;

  constructor() {}

  public ngOnInit() {}
}
