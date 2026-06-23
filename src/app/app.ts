import {Component } from '@angular/core';
import { Header } from './components/header/header';
import { Infobox } from './components/infobox/infobox';
import {Login} from './components/login/login';
import {View} from './view';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Infobox, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public view: View) {}
}
