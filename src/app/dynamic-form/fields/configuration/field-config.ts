import { InputComponent } from "../components/input/input.component";
import { TextAreaComponent } from "../components/text-area/text-area.component";
import { FieldType } from "../models/field-type";
import { InputField } from "../models/input-field";
import { TextAreaField } from "../models/text-area-field";

export type FieldConfigType = InputField | TextAreaField;

export class FieldComponent {
  public static getComponent<T extends FieldConfigType>(type: T) {
    switch (type.fieldType) {
      case FieldType.INPUT:
        return InputComponent;
      case FieldType.TEXT_AREA:
        return TextAreaComponent;
      default:
        break;
    }
    return null;
  }
}
