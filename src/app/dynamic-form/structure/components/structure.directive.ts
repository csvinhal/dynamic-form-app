import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  StructureComponent,
  StructureConfigType
} from "../configuration/structure-config";

@Directive({ selector: "[appStructureDirective]" })
export class StructureDirective implements OnInit {
  public structureConfigs: StructureConfigType[];
  public formGroup: FormGroup;

  constructor(
    private container: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  public ngOnInit() {
    this.structureConfigs.forEach((structureConfig: StructureConfigType) => {
      const component = StructureComponent.getComponent(structureConfig);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        component
      );
      const componentRef = this.container.createComponent(componentFactory);
      componentRef.instance.structureConfig = structureConfig as StructureConfigType;
      componentRef.instance.formGroup = this.formGroup;
    });
  }

  @Input()
  public set appStructureDirective(value: {
    structureConfigs: StructureConfigType[];
    formGroup: FormGroup;
  }) {
    const { structureConfigs, formGroup } = value;
    this.structureConfigs = structureConfigs;
    this.formGroup = formGroup;
  }
}
