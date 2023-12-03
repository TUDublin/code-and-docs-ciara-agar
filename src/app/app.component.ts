import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

@Component({
    selector:'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.componenet.css']
})

export class AppComponent {
 title = 'Degenerate Doggos';
}
