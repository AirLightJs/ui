import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { AirFaType } from "./fa-type.type";
import { AirFaIconType } from "./fa-icon.type";
import { AirFaAnimation } from "./fa-animation.type";
import { AirFaAnimations, AirFaTypes } from "./fa.helper";
import { extractValue } from "../../helpers/extract.helper";

@Directive({
  selector: "[fa]",
})
export class AirFaDirective implements OnInit {
  @Input("fa") icon: AirFaIconType;

  @Input() type: AirFaType;
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

  @Input() animation: AirFaAnimation;
  @Input() beat: unknown;
  @Input() beatFade: unknown;
  @Input() bounce: unknown;
  @Input() fade: unknown;
  @Input() flip: unknown;
  @Input() shake: unknown;
  @Input() spin: unknown;
  @Input() spinReverse: unknown;
  @Input() spinPulse: unknown;

  constructor(protected element: ElementRef) {
  }

  ngOnInit(): void {
    const classes = [
      "fa",
      "fa-" + this.icon,
      ...extractValue(this, AirFaTypes, "solid"),
      ...extractValue(this, AirFaAnimations, this.animation),
    ];

    classes.forEach((c) => this.element?.nativeElement?.classList.add(c));
  }
}
