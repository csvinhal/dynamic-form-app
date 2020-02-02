import { FieldConfigType } from "./fields/configuration/field-config";
import { GridConfigType } from "./grid/configuration/grid-config";

export type DynamicConfigType = GridConfigType | FieldConfigType;

export function isGridConfig(value: GridConfigType) {
  return (value as GridConfigType).gridType;
}

export function isFieldConfig(value: FieldConfigType) {
  return (value as FieldConfigType).fieldType;
}
