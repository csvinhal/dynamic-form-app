import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { GridComponent, GridConfigType } from "../configuration/grid-config";

@Directive({ selector: "[appGridDirective]" })
export class GridDirective implements OnInit {
  public gridConfigs: GridConfigType[];
  public formGroup: FormGroup;

  constructor(
    private container: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  public ngOnInit() {
    this.gridConfigs.forEach((dynamicConfig: GridConfigType) => {
      const component = GridComponent.getComponent(dynamicConfig);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        component
      );
      const componentRef = this.container.createComponent(componentFactory);
      componentRef.instance.dynamicConfigs = (dynamicConfig as GridConfigType).fields;
      componentRef.instance.formGroup = this.formGroup;
    });
  }

  @Input()
  public set appGridDirective(value: {
    gridConfigs: GridConfigType[];
    formGroup: FormGroup;
  }) {
    const { gridConfigs, formGroup } = value;
    this.gridConfigs = gridConfigs;
    this.formGroup = formGroup;
  }
}
