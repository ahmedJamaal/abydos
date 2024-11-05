import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

import { PackingComponent } from './packing/packing.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Contact-US', component: ContactUsComponent },
  { path: 'Packing', component: PackingComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
