import { GridType } from "./grid-type";

export interface GridDto {
  gridType?: GridType;
}

export class Grid implements GridDto {
  public gridType?: GridType;

  constructor(dto: GridDto) {
    Object.assign(this, dto);
  }
}
