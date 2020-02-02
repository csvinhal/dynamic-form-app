import { Field, FieldDto } from "./field";
import { FieldType } from "./field-type";

export interface InputFieldDto extends FieldDto {
  type: string;
}

export class InputField extends Field implements InputFieldDto {
  public type: string;
  constructor(dto: InputFieldDto) {
    super({ ...dto, fieldType: FieldType.INPUT });
    Object.assign(this, dto);
  }
}
