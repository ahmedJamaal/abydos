import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from '@layouts/public-layout/public-layout.component';

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    component: PublicLayoutComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },

  {
    path: "**",
    redirectTo: "/404"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {  scrollPositionRestoration: 'top' ,useHash: true ,  anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
