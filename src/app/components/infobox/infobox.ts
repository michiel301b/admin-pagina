import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { WritableSignal } from '@angular/core';

@Component({
  selector: 'app-infobox',
  imports: [],
  templateUrl: './infobox.html',
  styleUrl: './infobox.css',
})
export class Infobox {
  message:WritableSignal<string> = signal("Henk is erg eenzaam.");
  show:boolean = true;
  facts:WritableSignal<string[]> = signal([
    "Zijn naam is Henk.",
    "Hij is een mysterieuze man.",
    "Hij is beste vrienden met Ticho Hidding.",
  ]);
}
