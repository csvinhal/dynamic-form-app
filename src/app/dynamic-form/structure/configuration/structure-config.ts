import { PanelComponent } from "../components/panel/panel.component";
import { Panel } from "../models/panel";
import { StructureType } from "../models/structure-type";

export type StructureConfigType = Panel;

export class StructureComponent {
  public static getComponent<T extends StructureConfigType>(type: T) {
    switch (type.structureType) {
      case StructureType.PANEL:
        return PanelComponent;
      default:
        break;
    }
    return null;
  }
}
