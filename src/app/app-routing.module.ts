import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetsnearyouComponent } from './vetsnearyou/vetsnearyou.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'vetsnearyou', component: VetsnearyouComponent},
  {path: 'home', component: HomeComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
