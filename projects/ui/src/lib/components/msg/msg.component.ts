import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { AirColorType } from "../../types/color.type";
import { AirSizeType } from "../../types/size.type";
import { AirFaComponent } from "../fa/fa.component";
import { NgIf } from "@angular/common";
import { AbstractComponent } from "../abstract/abstract-color-size-icon-class.directive";

@Component({
  selector: "msg",
  templateUrl: "./msg.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AirFaComponent,
    NgIf,
  ],
})
export class AirMsgComponent extends AbstractComponent {
  @Input() override color: AirColorType = "success";
  @Input() override size: AirSizeType = "sm";
}
