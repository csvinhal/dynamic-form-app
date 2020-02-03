import { Field, FieldDto } from "./field";
import { FieldType } from "./field-type";

export interface TextAreaFieldDto extends FieldDto {
  rows: number;
}

export class TextAreaField extends Field implements TextAreaFieldDto {
  public rows: number;
  constructor(dto: TextAreaFieldDto) {
    super({ ...dto, fieldType: FieldType.TEXT_AREA });
    Object.assign(this, dto);
  }
}
