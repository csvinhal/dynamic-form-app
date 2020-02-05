import { GridConfigType } from "../../grid/configuration/grid-config";
import { StructureType } from "./structure-type";

export interface StructureDto {
  structureType?: StructureType;
  grids: GridConfigType[];
}

export class Structure implements StructureDto {
  public structureType?: StructureType;
  public grids: GridConfigType[];

  constructor(dto: StructureDto) {
    Object.assign(this, dto);
  }
}
