import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/authentication.service';
import { RouterModule, Routes } from '@angular/router';
import { VetsnearyouComponent } from './vetsnearyou/vetsnearyou.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'home', component: HomeComponent},
];
@NgModule({
  declarations: [
    //appcomponent,
    HomeComponent,
    LoginComponent,
    VetsnearyouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
