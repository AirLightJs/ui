import { Directive, Input } from "@angular/core";
import { AbstractComponent } from "../abstract/abstract-color-size-icon-class.directive";
import { AirColorType } from "../../types/color.type";

@Directive({
  selector: "[btn]",
})
export class AirButtonDirective extends AbstractComponent {
  @Input() btn: AirColorType | string = "primary";
  @Input() outline: boolean = false;

  override ngOnInit(): void {
    if (!this.btn?.length) {
      this.btn = "primary";
    }
    this.color = this.btn as AirColorType;

    this.elementRef?.nativeElement?.classList.add("btn");
    this.elementRef?.nativeElement?.classList.add("btn-" + this.getSize());

    if (this.outline) {
      this.elementRef?.nativeElement?.classList.add("btn-outline-" + this.getColor());
    } else {
      this.elementRef?.nativeElement?.classList.add("btn-" + this.getColor());
    }
  }
}
