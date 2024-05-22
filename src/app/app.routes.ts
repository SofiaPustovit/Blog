import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path:'', loadChildren: ()=> import('../app/pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login', loadChildren: ()=> import('../app/pages/login/login.module').then(m => m.LoginModule),
  }
];

