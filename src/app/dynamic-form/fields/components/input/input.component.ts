import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { InputField } from "../../models/input-field";
import { BaseFieldComponent } from "../base-field.component";

@Component({
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent extends BaseFieldComponent implements OnInit {
  public static nextId = 0;

  public id: string;

  constructor() {
    super();
  }

  public ngOnInit() {
    this.id = this.field.id || `input-${InputComponent.nextId++}`;
  }
}
