import { ColSize } from "../../grid/configuration/col-sizes";
import { FieldType } from "./field-type";

export interface FieldDto {
  id?: string;
  name: string;
  fieldType: FieldType;
  label: string;
  size?: ColSize;
}

export class Field implements FieldDto {
  public id: string;
  public name: string;
  public label: string;
  public fieldType: FieldType;
  public size?: ColSize;

  constructor(dto: FieldDto) {
    Object.assign(this, dto);
    this.size = new ColSize(this.size);
  }
}
