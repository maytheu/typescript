import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ElementsModule } from './elements/elements.module';
import { CollectionssModule } from './collectionss/collectionss.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    CollectionssModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
