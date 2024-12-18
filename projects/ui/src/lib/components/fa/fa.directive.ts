import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { AirFaType } from "./fa-type.type";
import { AirFaIcon } from "./fa-icon.type";

@Directive({
  selector: "[fa]",
})
export class AirFaDirective implements OnInit {
  @Input("fa") icon: AirFaIcon;
  @Input("type") type: AirFaType;

  @Input() solid: unknown = true;
  @Input() regular: unknown;
  @Input() light: unknown;
  @Input() thin: unknown;
  @Input() duotone: unknown;
  @Input() sharpSolid: unknown;
  @Input() sharpRegular: unknown;
  @Input() sharpLight: unknown;
  @Input() sharpThin: unknown;
  @Input() sharpDuotoneSolid: unknown;

  protected types: { [key: AirFaType | string]: string } = {
    "solid": "fa-solid",
    "regular": "fa-regular",
    "light": "fa-light",
    "thin": "fa-thin",
    "duotone": "fa-duotone",
    "sharpSolid": "fa-sharp fa-solid",
    "sharpRegular": "fa-sharp fa-regular",
    "sharpLight": "fa-sharp fa-light",
    "sharpThin": "fa-sharp fa-thin",
    "sharpDuotoneSolid": "fa-sharp-duotone fa-solid",
  };

  constructor(
    protected element: ElementRef,
  ) {
  }

  ngOnInit(): void {
    this.element?.nativeElement?.classList.add("fa");
    this.element?.nativeElement?.classList.add("fa-" + this.icon);

    if (!this.type) {
      Object.keys(this.types).forEach((type: AirFaType) => {
        if (this[type] === "") {
          this.element?.nativeElement?.classList.add(this.types[type]);
        }
      });
    } else {
      this.element?.nativeElement?.classList.add(this.types[this.type]);
    }
  }
}
