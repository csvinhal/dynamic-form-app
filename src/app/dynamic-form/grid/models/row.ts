import { FieldConfigType } from "../../fields/configuration/field-config";
import { Grid } from "./grid";
import { GridType } from "./grid-type";

export interface RowDto extends Grid {
  fields: FieldConfigType[];
}

export class Row extends Grid implements RowDto {
  public fields: FieldConfigType[];

  constructor(dto: RowDto) {
    super(dto);
    Object.assign(this, dto, { gridType: GridType.ROW });
  }
}
