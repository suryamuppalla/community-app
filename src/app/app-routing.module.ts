import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'owner',
    loadChildren: () => import('./modules/owners/owners.module').then( m => m.OwnersModule)
  },
  {
    path: 'tenant',
    loadChildren: () => import('./modules/tenant/tenant.module').then( m => m.TenantModule)
  },
  {
    path: 'complaints',
    loadChildren: () => import('./modules/complaints/complaints.module').then( m => m.ComplaintsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
