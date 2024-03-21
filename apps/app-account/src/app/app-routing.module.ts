import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('../../../shop/src/app/pages/transmissions/transmissions.module').then(
  //       m => m.TransmissionsModule,
  //     ),
  // },
  // {
  //   path: 'transmission/:id',
  //   loadChildren: () =>
  //     import('../../../shop/src/app/pages/transmission-details/transmission-details.module').then(
  //       m => m.TransmissionDetailsModule,
  //     ),
  // },
];

export const AppRoutingModule = RouterModule.forRoot(routes, {});
