import { Directive } from "@angular/core";
import { AbstractComponent } from "../abstract/abstract-color-size-icon-class.directive";

@Directive({
  selector: "[appear]",
})
export class AirAppearDirective extends AbstractComponent {
  override ngOnInit(): void {
    this.elementRef.nativeElement.classList.add("fade");
    setTimeout(() => this.elementRef.nativeElement.classList.add("show"));
  }
}
