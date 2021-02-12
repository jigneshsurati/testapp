import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent} from '../app/signup/signup.component'
import { LoginComponent } from '../app/login/login.component';
import { DashboardComponent} from '../app/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    component: SignupComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  }
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
