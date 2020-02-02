import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormComponent } from "./dynamic-form.component";
import { FieldDirective } from "./fields/components/fields.directive";
import { InputComponent } from "./fields/components/input/input.component";
import { GridDirective } from "./grid/components/grid.directive";
import { RowComponent } from "./grid/components/row/row.component";

@NgModule({
  declarations: [
    DynamicFormComponent,
    GridDirective,
    FieldDirective,
    InputComponent,
    RowComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormComponent],
  entryComponents: [InputComponent, RowComponent]
})
export class DynamicFormModule {}
