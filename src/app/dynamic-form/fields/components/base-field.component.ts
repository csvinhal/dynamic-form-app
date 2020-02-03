import { Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FieldConfigType } from "../configuration/field-config";

export abstract class BaseFieldComponent implements OnInit {
  public static nextId = 0;

  @Input()
  public field: FieldConfigType;
  @Input()
  public formControl: FormControl;

  public id: string;

  public ngOnInit() {
    this.id =
      this.field.id || `${this.field.name}-${BaseFieldComponent.nextId++}`;
  }
}
