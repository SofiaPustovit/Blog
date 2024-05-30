import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path:'', loadChildren: ()=> import('../app/pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login', loadChildren: ()=> import('../app/pages/login/login.module').then(m => m.LoginModule),

  },
  {
    path:'create-post', loadChildren: () => import('../app/pages/create-post/create-post.module').then(m => m.CreatePostModule),
  },
  {
    path:'edit-post', loadChildren: () => import('../app/pages/edit-post/edit-post.module').then(m => m.EditPostModule),
  }
];

