import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import {
  extractColor,
  extractColorHover,
  extractColorHoverType,
  extractColorType,
  extractSize,
  extractSizeType,
  isEnabled,
} from "../../helpers/extract.helper";
import { AirFaIconType } from "../fa/fa-icon.type";
import { AirColorType } from "../../types/color.type";
import { AirSizeType } from "../../types/size.type";
import { AirFaType } from "../fa/fa-type.type";

@Directive()
export abstract class AbstractComponent implements OnInit {
  @Input() color: AirColorType | string = "primary";
  @Input() primary: unknown;
  @Input() secondary: unknown;
  @Input() success: unknown;
  @Input() danger: unknown;
  @Input() warning: unknown;
  @Input() info: unknown;
  @Input() light: unknown;
  @Input() dark: unknown;
  @Input() link: unknown;
  @Input() blue: unknown;
  @Input() indigo: unknown;
  @Input() purple: unknown;
  @Input() pink: unknown;
  @Input() red: unknown;
  @Input() orange: unknown;
  @Input() yellow: unknown;
  @Input() green: unknown;
  @Input() teal: unknown;
  @Input() cyan: unknown;
  @Input() black: unknown;
  @Input() white: unknown;
  @Input() gray: unknown;
  @Input() grayDark: unknown;
  @Input() body: unknown;
  @Input() level1: unknown;
  @Input() level2: unknown;
  @Input() level3: unknown;
  @Input() level4: unknown;
  @Input() level5: unknown;
  @Input() level6: unknown;

  @Input() hoverColor: AirColorType | string = "primary";
  @Input() hoverPrimary: unknown;
  @Input() hoverSecondary: unknown;
  @Input() hoverSuccess: unknown;
  @Input() hoverDanger: unknown;
  @Input() hoverWarning: unknown;
  @Input() hoverInfo: unknown;
  @Input() hoverLight: unknown;
  @Input() hoverDark: unknown;
  @Input() hoverLink: unknown;
  @Input() hoverBlue: unknown;
  @Input() hoverIndigo: unknown;
  @Input() hoverPurple: unknown;
  @Input() hoverPink: unknown;
  @Input() hoverRed: unknown;
  @Input() hoverOrange: unknown;
  @Input() hoverYellow: unknown;
  @Input() hoverGreen: unknown;
  @Input() hoverTeal: unknown;
  @Input() hoverCyan: unknown;
  @Input() hoverBlack: unknown;
  @Input() hoverWhite: unknown;
  @Input() hoverGray: unknown;
  @Input() hoverGrayDark: unknown;
  @Input() hoverBody: unknown;
  @Input() hoverLevel1: unknown;
  @Input() hoverLevel2: unknown;
  @Input() hoverLevel3: unknown;
  @Input() hoverLevel4: unknown;
  @Input() hoverLevel5: unknown;
  @Input() hoverLevel6: unknown;

  @Input() size: AirSizeType = "md";
  @Input() sm: unknown;
  @Input() md: unknown;
  @Input() lg: unknown;

  @Input() icon: AirFaIconType;
  @Input() iconType: AirFaType = "solid";

  @Input() text: string;

  @Input() classes: string;
  @Input() appear: unknown;

  constructor(protected elementRef: ElementRef) {}

  ngOnInit(): void {
    this.color = extractColorType(this, this.color);
    this.hoverColor = extractColorHoverType(this, this.hoverColor);
    this.size = extractSizeType(this, this.size);
  }

  protected getColor(): string {
    return extractColor(this, this.color);
  }

  protected getHoverColor(): string {
    return extractColorHover(this, this.hoverColor);
  }

  protected getSize(): string {
    return extractSize(this, this.size);
  }

  protected isProp(val: any): boolean {
    return isEnabled(val);
  }
}
