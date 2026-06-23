import {effect, Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class View {
  view:WritableSignal<string> = signal<string>('test');
  constructor() {
    const savedView = localStorage.getItem('savedView');
    if (savedView) {
      this.view.set(savedView);
    }

    effect(() => {
      localStorage.setItem('savedView', this.view());
    });
  }
}
