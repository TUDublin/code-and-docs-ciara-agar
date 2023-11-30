import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'frontend';

 calculateSHA256Hash(message: string): string {
    const hash = CryptoJS.SHA256(message);
    return hash.toString(CryptoJS.enc.Hex);
 }
}