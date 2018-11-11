import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {FormComponent} from './components/form/form.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ViewComponent} from './components/view/view.component';
import {EditComponent} from './components/edit/edit.component';


const appRoutes:Routes = [



  {
    path: 'form-page',
    component: FormComponent
  },

  {
    path: 'portfolio',
    component: PortfolioComponent
  },


  {
    path: 'view/:contactId',
    component: ViewComponent
  },

  {
    path: 'edit/:contactId',
    component: EditComponent
  }


];

export const routing: ModuleWithProviders = <ModuleWithProviders>RouterModule.forRoot(appRoutes);
