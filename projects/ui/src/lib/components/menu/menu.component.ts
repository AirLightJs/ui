import { Component, Input } from "@angular/core";
import { AbstractComponent } from "../abstract/abstract-color-size-icon-class.directive";
import { AirColorType } from "../../types/color.type";
import { AirMenuItemInterface } from "./item.interface";
import { AirMenuItemComponent } from "./item/item.component";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: "menu",
  templateUrl: "./menu.component.html",
  imports: [
    AirMenuItemComponent,
    NgForOf,
    NgIf
  ],
})
export class AirMenuComponent extends AbstractComponent {
  @Input() override color: AirColorType | string = "level1";
  @Input() override hoverColor: AirColorType | string = "level2";

  @Input() items: AirMenuItemInterface[] = [];
  @Input() subject: any;

  protected getItemColor(item: AirMenuItemInterface): AirColorType | string {
    return item.color || this.color;
  }

  protected getItemHoverColor(item: AirMenuItemInterface): AirColorType | string {
    return item.hoverColor || this.hoverColor;
  }

  protected click(item: AirMenuItemInterface): void {
    item.click && item.click(this.subject);
  }
}
