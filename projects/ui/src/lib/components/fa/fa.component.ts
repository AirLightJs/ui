import { Component, Input, OnInit } from "@angular/core";
import { AirFaIcon } from "./fa-icon.type";
import { AirFaType } from "./fa-type.type";
import { AirFaDirective } from "./fa.directive";

@Component({
  selector: "fa",
  template: `<i [fa]="icon" [type]="type" [class]="class"></i>`,
  imports: [
    AirFaDirective,
  ],
})
export class AirFaComponent implements OnInit {
  @Input("icon") icon: AirFaIcon;
  @Input("type") type: AirFaType;
  @Input("class") class: string = "";

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

  ngOnInit(): void {
    if (!this.type) {
      Object.keys(this.types).forEach((type: AirFaType) => {
        if (this[type] === "") {
          this.type = type;
        }
      });
    }
  }
}
