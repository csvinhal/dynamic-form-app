import { RowComponent } from "../components/row/row.component";
import { GridType } from "../models/grid-type";
import { Row } from "../models/row";

export type GridConfigType = Row;

export class GridComponent {
  public static getComponent<T extends GridConfigType>(type: T) {
    switch (type.gridType) {
      case GridType.ROW:
        return RowComponent;
      default:
        break;
    }
    return null;
  }
}
