import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({declarations:[
  AppComponent,
  HomeComponent,
 ]})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:'<div style="text-align:centre"><h1> Hello world!</h1><app-home><app-home></div>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Degenrate Doggos';
}

 