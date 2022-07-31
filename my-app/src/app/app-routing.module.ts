import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeSection11Component } from './home-section11/home-section11.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './servers-section11/edit-server-section11/can-deactivate-guard.service';
import { EditServerSection11Component } from './servers-section11/edit-server-section11/edit-server-section11.component';
import { ServerResolver } from './servers-section11/server-section11/server-resolver.service';
import { ServerSection11Component } from './servers-section11/server-section11/server-section11.component';
import { ServersSection11Component } from './servers-section11/servers-section11.component';
import { UserSection11Component } from './users-section11/user-section11/user-section11.component';
import { UsersSection11Component } from './users-section11/users-section11.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeSection11Component
  },
  {
    path: 'users',
    component: UsersSection11Component
  },
  {
    path: 'users/:id/:name',
    component: UserSection11Component
  },
  {
    path: 'servers',
    //canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersSection11Component,
    children: [
      {
        path: ':id',
        component: ServerSection11Component,
        resolve: {server: ServerResolver} // support pass object over route, it will call ServerResolver before come to ServerSection11Component
      },
      {
        path: ':id/edit',
        component: EditServerSection11Component,
        canDeactivate: [CanDeactivateGuard]  // this help us when user click outside this route and then it will show us alert
      }
    ]
  },
  {
    path: 'not-found',
    //component: PageNotFoundComponent,
    component: ErrorPageComponent, data: {message: 'Page Not Found'}
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
