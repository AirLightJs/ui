import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { AbstractComponent } from "../abstract/abstract-color-size-icon-class.directive";
import { AirColorType } from "../../types/color.type";

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AirCardComponent extends AbstractComponent {
  @Input() override color: AirColorType = "level1";
}
