
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticate(email: string, password: string): boolean {
    // TODO: Implement actual authentication logic here
    // For simplicity, always return true in this example
    return true;
  }
}
