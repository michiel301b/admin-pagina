import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Infobox } from './components/infobox/infobox';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Infobox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('untitled2');
}
