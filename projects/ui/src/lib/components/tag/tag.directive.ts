import { Directive, Input } from "@angular/core";
import { AbstractComponent } from "../abstract/abstract-color-size-icon-class.directive";
import { AirColorType } from "../../types/color.type";

@Directive({
  selector: "[tag]",
})
export class AirTagDirective extends AbstractComponent {
  @Input() tag: AirColorType | string;

  override ngOnInit(): void {
    this.elementRef.nativeElement?.classList.add("tag");
    this.elementRef.nativeElement?.classList.add(this.getColor());
    this.elementRef.nativeElement?.classList.add(this.getSize());
  }
}
