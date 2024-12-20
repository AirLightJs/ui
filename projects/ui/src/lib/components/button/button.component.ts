import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { NgIf } from "@angular/common";
import { AirFaComponent } from "../fa/fa.component";
import { AbstractComponent } from "../abstract/abstract-color-size-icon-class.directive";

@Component({
  selector: "btn",
  templateUrl: "./button.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AirFaComponent,
    NgIf,
  ],
})
export class AirButtonComponent extends AbstractComponent {
  @ViewChild("button") button: ElementRef;

  @Input() loading: unknown;
  @Input() disabled: unknown;
  @Input() submit: boolean;

  @Input() block: any;
  @Input() rounded: unknown;
  @Input() outline: unknown;

  click(): void {
    this.button.nativeElement.blur();
  }
}
