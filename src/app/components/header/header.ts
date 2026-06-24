import {Component, inject} from '@angular/core';
import { View } from '../../view';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  public view = inject(View);
  isMenuOpen:boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    localStorage.removeItem('token');
    this.view.view.set('login');
  }
}
