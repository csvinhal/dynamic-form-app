import { Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FieldConfigType } from "../configuration/field-config";

export abstract class BaseFieldComponent {
  @Input()
  public field: FieldConfigType;
  @Input()
  public formControl: FormControl;
}
