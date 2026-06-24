import {Component } from '@angular/core';
import { Header } from './components/header/header';
import {Login} from './components/login/login';
import {View} from './view';
import {Players} from './components/players/players';
import {Aggregate} from './components/aggregate/aggregate';
import {Dates} from './components/dates/dates';
import {Allgames} from './components/allgames/allgames';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Login, Players, Aggregate, Dates, Allgames],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public view: View) {}
}
