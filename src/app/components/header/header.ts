import { Component } from '@angular/core';
import { View } from '../../view';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isMenuOpen:boolean = false;

  constructor(
    public view: View
  ) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    localStorage.removeItem('token');
    this.view.view.set('login');
  }
}
