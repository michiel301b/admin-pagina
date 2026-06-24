import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-players',
  imports: [],
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class Players implements OnInit {

    private httpService = inject(HttpService);

    error:WritableSignal<string> = signal("");
    show:WritableSignal<boolean> = signal(false);
    players:WritableSignal<any[]> = signal([]);

    ngOnInit() {
      this.httpService.getPlayers().subscribe({
        next: (data: any) => {
          this.players.set(data);
      },
        error: (err) => {
          this.error.set(`Cannot load because:  ${err.error.message}`);
          this.show.set(true);
          }
        }
      )
    }
}
