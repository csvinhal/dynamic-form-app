import { FieldConfigType } from "./fields/configuration/field-config";
import { GridConfigType } from "./grid/configuration/grid-config";
import { StructureConfigType } from "./structure/configuration/structure-config";

export type DynamicConfigType =
  | GridConfigType
  | FieldConfigType
  | StructureConfigType;

export function isStructureConfig(value: StructureConfigType) {
  return (value as StructureConfigType).structureType;
}

export function isGridConfig(value: GridConfigType) {
  return (value as GridConfigType).gridType;
}

export function isFieldConfig(value: FieldConfigType) {
  return (value as FieldConfigType).fieldType;
}
