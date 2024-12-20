import { Directive, Input, OnInit } from "@angular/core";
import { AbstractComponent } from "../abstract/abstract-color-size-icon-class.directive";
import { AirColorType } from "../../types/color.type";

@Directive({
  selector: "[card]",
})
export class AirCardDirective extends AbstractComponent implements OnInit {
  @Input() card: AirColorType | string;

  override ngOnInit(): void {
    this.color = (this.card?.length ? this.card : "primary") as AirColorType;
    this.elementRef?.nativeElement?.classList.add("card");
    this.elementRef?.nativeElement?.classList.add(this.getColor());
    this.elementRef?.nativeElement?.classList.add(this.getSize());
  }
}
