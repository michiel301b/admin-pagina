import { Component } from '@angular/core';
import { View } from '../../view';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(
    public view: View
  ) {}

  logout() {
    localStorage.removeItem('token');
    this.view.view.set('test');
  }
}
