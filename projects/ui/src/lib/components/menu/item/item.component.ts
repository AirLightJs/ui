import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AbstractComponent } from "../../abstract/abstract-color-size-icon-class.directive";
import { AirFaComponent } from "../../fa/fa.component";
import { NgIf } from "@angular/common";
import { AirColorType } from "../../../types/color.type";

@Component({
  selector: "menuItem",
  templateUrl: "./item.component.html",
  imports: [
    AirFaComponent,
    NgIf,
  ],
})
export class AirMenuItemComponent extends AbstractComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() override color: AirColorType | string = "level1";
  @Input() override hoverColor: AirColorType | string = "level2";
}
