import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormComponent} from './components/form/form.component';
import {FormService} from './components/services/form.service';
import {FormsModule} from '@angular/forms';
import {PropertiesService} from './components/services/properties.service';
import {HttpClientModule} from '@angular/common/http';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {routing} from './app.routes';
import {PortfolioService} from './components/services/portfolio.service';
import {ViewComponent} from './components/view/view.component';
import {ViewService} from './components/services/view.service';
import {EditComponent} from './components/edit/edit.component';
import {EditService} from './components/services/edit.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PortfolioComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [FormService, PropertiesService, PortfolioService, ViewService, EditService],
  bootstrap: [AppComponent]
})

export class AppModule { }

