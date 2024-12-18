import { NgModule } from "@angular/core";
import { AirFaDirective } from "./components/fa/fa.directive";
import { AirFaComponent } from "./components/fa/fa.component";

@NgModule({
  declarations: [],
  imports: [
    AirFaComponent,
    AirFaDirective,
  ],
  exports: [
    AirFaComponent,
    AirFaDirective,
  ],
})
export class AirUiModule {
}
