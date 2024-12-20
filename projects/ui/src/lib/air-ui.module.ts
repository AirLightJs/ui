import { NgModule } from "@angular/core";
import { AirFaDirective } from "./components/fa/fa.directive";
import { AirFaComponent } from "./components/fa/fa.component";
import { AirButtonComponent } from "./components/button/button.component";
import { AirCardComponent } from "./components/card/card.component";
import { AirButtonDirective } from "./components/button/button.directive";
import { AirCardDirective } from "./components/card/card.directive";
import { AirMsgComponent } from "./components/msg/msg.component";
import { AirAppearDirective } from "./components/appear/appear.directive";
import { AirMsgDirective } from "./components/msg/msg.directive";
import { AirTagComponent } from "./components/tag/tag.component";
import { AirTagDirective } from "./components/tag/tag.directive";
import { AirMenuComponent } from "./components/menu/menu.component";
import { AirMenuItemComponent } from "./components/menu/item/item.component";
import { AirContextMenuDirective } from "./components/menu/context-menu.directive";
import { AirDropdownDirective } from "./components/menu/dropdown.directive";

@NgModule({
  declarations: [],
  imports: [
    AirButtonComponent,
    AirButtonDirective,
    AirCardComponent,
    AirFaComponent,
    AirFaDirective,
    AirCardDirective,
    AirMsgComponent,
    AirMsgDirective,
    AirAppearDirective,
    AirTagComponent,
    AirTagDirective,
    AirMenuComponent,
    AirMenuItemComponent,
    AirContextMenuDirective,
    AirDropdownDirective,
  ],
  exports: [
    AirButtonComponent,
    AirButtonDirective,
    AirCardComponent,
    AirFaComponent,
    AirFaDirective,
    AirCardDirective,
    AirMsgComponent,
    AirMsgDirective,
    AirAppearDirective,
    AirTagComponent,
    AirTagDirective,
    AirMenuComponent,
    AirMenuItemComponent,
    AirContextMenuDirective,
    AirDropdownDirective,
  ],
})
export class AirUiModule {
}
