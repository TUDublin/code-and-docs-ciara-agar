import { Component } from '@angular/core';
import { AuthService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string="";
  password: string="";

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.authService.authenticate(this.email, this.password)) {
      console.log('Login successful');
      // TODO: Redirect to a different page or perform additional actions
    } else {
      console.log('Invalid credentials');
    }
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
