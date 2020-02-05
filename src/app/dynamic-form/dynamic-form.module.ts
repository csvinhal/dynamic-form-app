import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormComponent } from "./dynamic-form.component";
import { FieldDirective } from "./fields/components/fields.directive";
import { InputComponent } from "./fields/components/input/input.component";
import { TextAreaComponent } from "./fields/components/text-area/text-area.component";
import { GridDirective } from "./grid/components/grid.directive";
import { RowComponent } from "./grid/components/row/row.component";
import { PanelComponent } from "./structure/components/panel/panel.component";
import { StructureDirective } from "./structure/components/structure.directive";

@NgModule({
  declarations: [
    DynamicFormComponent,
    GridDirective,
    FieldDirective,
    StructureDirective,
    InputComponent,
    RowComponent,
    TextAreaComponent,
    PanelComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormComponent],
  entryComponents: [
    InputComponent,
    RowComponent,
    TextAreaComponent,
    PanelComponent
  ]
})
export class DynamicFormModule {}
