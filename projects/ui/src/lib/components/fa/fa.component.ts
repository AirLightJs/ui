import { Component, Input } from "@angular/core";
import { AirFaIconType } from "./fa-icon.type";
import { AirFaType } from "./fa-type.type";
import { AirFaAnimation } from "./fa-animation.type";
import { AirFaAnimations, AirFaTypes } from "./fa.helper";
import { extractKey } from "../../helpers/extract.helper";

@Component({
  selector: "fa",
  template: `<i class="fa fa-{{icon}} {{getType()}} {{getAnimation()}} {{classes}}"></i>`,
})
export class AirFaComponent {
  @Input() icon: AirFaIconType;
  @Input() classes: string = "";

  @Input() type: AirFaType = "solid";
  @Input() solid: unknown;
  @Input() regular: unknown;
  @Input() light: unknown;
  @Input() thin: unknown;
  @Input() duotone: unknown;
  @Input() sharpSolid: unknown;
  @Input() sharpRegular: unknown;
  @Input() sharpLight: unknown;
  @Input() sharpThin: unknown;
  @Input() sharpDuotoneSolid: unknown;

  @Input() animation: AirFaAnimation = null;
  @Input() beat: unknown;
  @Input() beatFade: unknown;
  @Input() bounce: unknown;
  @Input() fade: unknown;
  @Input() flip: unknown;
  @Input() shake: unknown;
  @Input() spin: unknown;
  @Input() spinReverse: unknown;
  @Input() spinPulse: unknown;

  getType(): AirFaType {
    return extractKey(this, AirFaTypes, AirFaTypes[this.type]);
  }

  getAnimation(): AirFaAnimation {
    return extractKey(this, AirFaAnimations, this.animation ? AirFaAnimations[this.animation] : null);
  }
}
