import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AuthGuard]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
