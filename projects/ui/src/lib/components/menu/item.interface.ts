import { AirFaType } from "../fa/fa-type.type";
import { AirFaIconType } from "../fa/fa-icon.type";
import { AirColorType } from "../../types/color.type";

export interface AirMenuItemInterface {
  text?: string;
  icon?: AirFaIconType;
  iconType?: AirFaType;
  click?: (subject: any | null) => void;
  color?: AirColorType;
  hoverColor?: AirColorType;
}
