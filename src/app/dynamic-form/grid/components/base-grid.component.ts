import { Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfigType } from "../../fields/configuration/field-config";
import { GridConfigType } from "../configuration/grid-config";

export abstract class BaseGridComponent {
  @Input()
  public gridConfig: GridConfigType;
  @Input()
  public formGroup: FormGroup;

  public getColClass(formField: FieldConfigType) {
    return Object.entries(formField.size).map((value: [string, any]) => {
      return `col-${value[0]}-${value[1]}`;
    });
  }
}
