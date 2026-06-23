import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-players',
  imports: [],
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class Players implements OnInit {

    readonly token = localStorage.getItem('token');
    error:WritableSignal<string> = signal("");
    show:WritableSignal<boolean> = signal(false);
    players:WritableSignal<any[]> = signal([]);

    constructor(private httpClient: HttpClient) { }

    ngOnInit() {
      this.httpClient.get('http://localhost:8000/admin/players', {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).subscribe({
        next: (data: any) => {
          this.players.set(data);
          console.log(data);
      },
        error: (err) => {
          console.log('error trigger');
          this.error.set(`Cannot load because:  ${err.error.message}`);
          console.log('error message', err.error.message);
          this.show.set(true);
          console.log('show status', this.show());
          console.log(err);
          }
        }
      )
    }
}
