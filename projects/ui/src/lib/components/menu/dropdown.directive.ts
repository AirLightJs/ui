import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  Directive,
  ElementRef,
  EnvironmentInjector,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";
import { AirMenuComponent } from "./menu.component";
import { AirMenuItemInterface } from "./item.interface";
import { AirPositionType } from "../../types/position.type";
import { extractKey } from "../../helpers/extract.helper";
import { AirPositionSet } from "../../sets/position.set";

@Directive({
  selector: "[dropdown]",
})
export class AirDropdownDirective implements OnInit {
  @Input() dropdown: AirMenuItemInterface[] = [];
  @Input() subject: any;

  @Input() position: AirPositionType;
  @Input() topLeft: unknown;
  @Input() topRight: unknown;
  @Input() bottomRight: unknown;
  @Input() bottomLeft: unknown;

  private menuComponentRef: ComponentRef<AirMenuComponent>;
  private menuComponentDomRef: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private environmentInjector: EnvironmentInjector,
  ) {
  }

  ngOnInit(): void {
    this.menuComponentRef = createComponent(AirMenuComponent, {
      environmentInjector: this.environmentInjector,
    });

    this.menuComponentRef.instance.items = this.dropdown;
    this.menuComponentRef.instance.subject = this.subject;

    this.appRef.attachView(this.menuComponentRef.hostView);
    this.menuComponentDomRef = (this.menuComponentRef.hostView as any).rootNodes[0] as HTMLElement;

    this.elementRef.nativeElement.classList.add("p-r");

    this.menuComponentDomRef.classList.add("p-a");
    this.menuComponentDomRef.classList.add("z-1001");
    this.menuComponentDomRef.classList.add("fade");
    this.menuComponentDomRef.classList.add("d-n");
    this.elementRef.nativeElement.classList.add("d-ib");

    this.elementRef.nativeElement.appendChild(
      this.menuComponentDomRef,
    );
  }

  @HostListener("document:click", [ "$event" ])
  outsideClick(event: PointerEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.hide();
    }
  }

  @HostListener("click", [ "$event" ])
  click(): void {
    const rect = this.getRect();
    for (const prop in rect) {
      this.menuComponentDomRef.style[prop] = rect[prop];
    }

    if (this.menuComponentDomRef.classList.contains("d-n") && !this.menuComponentDomRef.classList.contains("show")) {
      this.menuComponentDomRef.classList.remove("d-n");
      this.menuComponentDomRef.classList.add("show");
    } else {
      this.hide();
    }
  }

  private hide(): void {
    if (this.menuComponentDomRef.classList.contains("show")) {
      this.menuComponentDomRef.classList.remove("show");
      setTimeout(() => this.menuComponentDomRef.classList.add("d-n"), 100);
    }
  }

  private getRect(): { top?: string, left?: string, right?: string, bottom?: string } {
    const positions = {
      topLeft: { bottom: "calc(100% + 2px)", left: "0" },
      topRight: { bottom: "calc(100% + 2px)", right: "0" },
      bottomRight: { top: "calc(100% + 2px)", right: "0" },
      bottomLeft: { top: "calc(100% + 2px)", left: "0" },
    };

    if (!this.position) {
      this.position = extractKey(this, AirPositionSet);
    }

    return positions[this.position] || positions.bottomRight;
  }
}
