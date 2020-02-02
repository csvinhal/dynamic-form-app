import { InputComponent } from "../components/input/input.component";
import { FieldType } from "../models/field-type";
import { InputField } from "../models/input-field";

export type FieldConfigType = InputField;

export class FieldComponent {
  public static getComponent<T extends FieldConfigType>(type: T) {
    switch (type.fieldType) {
      case FieldType.INPUT:
        return InputComponent;
      default:
        break;
    }
    return null;
  }
}
