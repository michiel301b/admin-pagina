import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-aggregate',
  imports: [],
  templateUrl: './aggregate.html',
  styleUrl: './aggregate.css',
})
export class Aggregate implements OnInit {
  readonly token = localStorage.getItem('token');
  error:WritableSignal<string> = signal("");
  show:WritableSignal<boolean> = signal(false);
  aggregate:WritableSignal<any[]> = signal([]);
  totalGames:WritableSignal<number> = signal(0);
  totalPlayers:WritableSignal<number> = signal(0);
  apiStats:WritableSignal<any[]> = signal([]);

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:8000/admin/aggregate', {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).subscribe({
        next: (data: any) => {
          this.aggregate.set(data);
          this.totalGames.set(data[0]?.aantal_spellen)
          this.totalPlayers.set(data[1]?.aantal_spelers);
          this.apiStats.set(data[2]);
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
