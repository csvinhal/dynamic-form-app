import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  DynamicConfigType,
  isFieldConfig,
  isGridConfig
} from "./dynamic-form/dynamic-config";
import { FieldConfigType } from "./dynamic-form/fields/configuration/field-config";
import { FieldType } from "./dynamic-form/fields/models/field-type";
import { InputField } from "./dynamic-form/fields/models/input-field";
import { GridConfigType } from "./dynamic-form/grid/configuration/grid-config";
import { GridType } from "./dynamic-form/grid/models/grid-type";
import { Row } from "./dynamic-form/grid/models/row";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public formGroup: FormGroup;
  public dynamicConfigs: DynamicConfigType[];

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.dynamicConfigs = this.getFormFields();
    this.formGroup = this.formBuilder.group({});

    this.dynamicConfigs.forEach((dynamicConfig: DynamicConfigType) => {
      this.createFormGroup(dynamicConfig);
    });
  }

  public createFormGroup(dynamicConfig: DynamicConfigType) {
    if (isGridConfig(dynamicConfig as GridConfigType)) {
      const fields = (dynamicConfig as GridConfigType).fields;
      fields.forEach((field: FieldConfigType) => {
        this.createFormGroup(field);
      });
    } else if (isFieldConfig(dynamicConfig as FieldConfigType)) {
      const control = this.formBuilder.control({
        value: null,
        disabled: false
      });
      this.formGroup.addControl(
        (dynamicConfig as FieldConfigType).name,
        control
      );
    }
  }

  public getFormFields(): DynamicConfigType[] {
    return [
      new Row({
        gridType: GridType.ROW,
        fields: [
          new InputField({
            type: "text",
            fieldType: FieldType.INPUT,
            name: "username",
            label: "Login"
          }),
          new InputField({
            type: "email",
            fieldType: FieldType.INPUT,
            name: "email",
            label: "E-mail"
          })
        ]
      })
    ];
  }
}
