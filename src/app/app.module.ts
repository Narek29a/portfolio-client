import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormComponent} from './components/form/form.component';
import {FormService} from './components/services/form.service';
import {FormsModule} from '@angular/forms';
import {PropertiesService} from './components/services/properties.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormService, PropertiesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
