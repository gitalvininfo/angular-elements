import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  // bootstrap: [AppComponent],
  // entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const element = createCustomElement(AppComponent, {
      injector: this.injector,
    });

    customElements.define('web-comp-one', element);
  }
}
