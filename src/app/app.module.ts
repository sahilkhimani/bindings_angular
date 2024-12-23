import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerFormsComponent } from './server-forms/server-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    ServerFormsComponent
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
