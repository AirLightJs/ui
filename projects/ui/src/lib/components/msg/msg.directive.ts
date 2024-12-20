import { Directive, Input, OnInit } from "@angular/core";
import { AirColorType } from "../../types/color.type";
import { AbstractComponent } from "../abstract/abstract-color-size-icon-class.directive";
import { AirSizeType } from "../../types/size.type";

@Directive({
  selector: "[msg]",
})
export class AirMsgDirective extends AbstractComponent implements OnInit {
  @Input() msg: AirColorType | string;
  @Input() override size: AirSizeType = "sm";

  override ngOnInit(): void {
    this.color = (this.msg?.length ? this.msg : "primary") as AirColorType;
    this.elementRef?.nativeElement?.classList.add("msg");
    this.elementRef?.nativeElement?.classList.add(this.getColor());
    this.elementRef?.nativeElement?.classList.add(this.getSize());
  }
}
