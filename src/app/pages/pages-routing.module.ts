import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './contact-us/teams/teams.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ServicesComponent } from './home/services/services.component';
import { PackingComponent } from './packing/packing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Product', component: ProductDetailsComponent },
  { path: 'Contact-US', component: ContactUsComponent },
  { path: 'Packing', component: PackingComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
