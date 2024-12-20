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

@Directive({
  selector: "[contextMenu]",
})
export class AirContextMenuDirective implements OnInit {
  @Input() contextMenu: AirMenuItemInterface[] = [];
  @Input() subject: any;

  private menuComponentRef: ComponentRef<AirMenuComponent>;
  private menuComponentDomRef: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private environmentInjector: EnvironmentInjector,
  ) {}

  ngOnInit(): void {
    this.menuComponentRef = createComponent(AirMenuComponent, {
      environmentInjector: this.environmentInjector,
    });

    this.menuComponentRef.instance.items = this.contextMenu;
    this.menuComponentRef.instance.subject = this.subject;

    this.appRef.attachView(this.menuComponentRef.hostView);
    this.menuComponentDomRef = (this.menuComponentRef.hostView as any).rootNodes[0] as HTMLElement;

    this.elementRef.nativeElement.classList.add("p-r");

    this.menuComponentDomRef.classList.add("p-a");
    this.menuComponentDomRef.classList.add("z-1001");
    this.menuComponentDomRef.classList.add("fade");

    this.elementRef.nativeElement.appendChild(
      this.menuComponentDomRef,
    );
  }

  @HostListener("document:contextmenu", [ "$event" ])
  outsideContextMenu(): void {
    this.hide();
  }

  @HostListener("contextmenu", [ "$event" ])
  contextmenu(event: PointerEvent): void {
    event.preventDefault();

    setTimeout(() => {
      const rect = this.elementRef.nativeElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      this.menuComponentDomRef.style.top = y + "px";
      this.menuComponentDomRef.style.left = x + "px";

      this.menuComponentDomRef.classList.remove("d-n");
      this.menuComponentDomRef.classList.add("show");
    }, 200);
  }

  @HostListener("document:click", [ "$event" ])
  click(): void {
    this.hide();
  }

  private hide(): void {
    this.menuComponentDomRef.classList.remove("show");
    setTimeout(() => {
      this.menuComponentDomRef.classList.add("d-n");
    }, 100);
  }
}
