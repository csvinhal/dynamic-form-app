import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FieldConfigType } from "../configuration/field-config";
import { FieldComponent } from "../configuration/field-config";
import { BaseFieldComponent } from "./base-field.component";

@Directive({ selector: "[appFieldDirective]" })
export class FieldDirective implements OnInit {
  public fieldConfig: FieldConfigType;
  public formGroup: FormGroup;

  constructor(
    private container: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  public ngOnInit() {
    const component = FieldComponent.getComponent(this.fieldConfig);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    const componentRef = this.container.createComponent(componentFactory);
    componentRef.instance.field = this.fieldConfig;
    componentRef.instance.formControl = this.formGroup.get(
      this.fieldConfig.name
    ) as FormControl;
  }

  @Input()
  public set appFieldDirective(value: {
    fieldConfig: FieldConfigType;
    formGroup: FormGroup;
  }) {
    const { fieldConfig, formGroup } = value;
    this.fieldConfig = fieldConfig;
    this.formGroup = formGroup;
  }
}
