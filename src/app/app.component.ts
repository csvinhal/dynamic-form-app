import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  DynamicConfigType,
  isFieldConfig,
  isGridConfig,
  isStructureConfig
} from "./dynamic-form/dynamic-config";
import { FieldConfigType } from "./dynamic-form/fields/configuration/field-config";
import { InputField } from "./dynamic-form/fields/models/input-field";
import { TextAreaField } from "./dynamic-form/fields/models/text-area-field";
import { GridConfigType } from "./dynamic-form/grid/configuration/grid-config";
import { Row } from "./dynamic-form/grid/models/row";
import { StructureConfigType } from "./dynamic-form/structure/configuration/structure-config";
import { Panel } from "./dynamic-form/structure/models/panel";

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
    if (isStructureConfig(dynamicConfig as StructureConfigType)) {
      const { grids } = dynamicConfig as StructureConfigType;
      grids.forEach((grid: GridConfigType) => {
        this.createFormGroup(grid);
      });
    }
    if (isGridConfig(dynamicConfig as GridConfigType)) {
      const { fields } = dynamicConfig as GridConfigType;
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
      new Panel({
        header: "Primeiro painel",
        grids: [
          new Row({
            fields: [
              new InputField({
                type: "text",
                name: "username",
                label: "Login"
              }),
              new InputField({
                type: "email",
                name: "email",
                label: "E-mail"
              }),
              new TextAreaField({
                name: "email",
                label: "E-mail",
                rows: 3,
                size: { md: 12, lg: 12, xl: 12 }
              })
            ]
          })
        ]
      })
    ];
  }
}
