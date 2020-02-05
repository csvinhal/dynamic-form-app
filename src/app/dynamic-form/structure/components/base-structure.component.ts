import { Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { StructureConfigType } from "../configuration/structure-config";

export abstract class BaseStructureComponent {
  @Input()
  public structureConfig: StructureConfigType;
  @Input()
  public formGroup: FormGroup;
}
