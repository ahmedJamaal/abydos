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
    redirectTo: "/Error/404"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' ,  useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
