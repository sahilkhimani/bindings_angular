import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerElementComponent } from './server-element/server-element.component';
import { FormElementComponent } from './form-element/form-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    FormElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
