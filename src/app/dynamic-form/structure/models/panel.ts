import { Structure, StructureDto } from "./structure";
import { StructureType } from "./structure-type";

export interface PanelDto extends StructureDto {
  header: string;
}

export class Panel extends Structure implements PanelDto {
  public header: string;

  constructor(dto: PanelDto) {
    super(dto);
    Object.assign(this, dto, { structureType: StructureType.PANEL });
  }
}
