import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RxjsService } from "./core/services/rxjs.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [RxjsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
