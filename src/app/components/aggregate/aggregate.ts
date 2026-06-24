import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {ChartService} from '../../services/chart.service';

@Component({
  selector: 'app-aggregate',
  imports: [],
  templateUrl: './aggregate.html',
  styleUrl: './aggregate.css',
})
export class Aggregate implements OnInit {

  private httpService = inject(HttpService);
  private chartService = inject(ChartService);

  error:WritableSignal<string> = signal("");
  show:WritableSignal<boolean> = signal(false);
  totalGames:WritableSignal<number> = signal(0);
  totalPlayers:WritableSignal<number> = signal(0);


  ngOnInit() {
    this.httpService.getAgrregate().subscribe({
        next: (data: any) => {

          this.totalGames.set(data[0]?.aantal_spellen)
          this.totalPlayers.set(data[1]?.aantal_spelers);

          const stats = data[2];
          const apis = stats.map((stat: any) => stat.api);
          const counts = stats.map((stat: any) => stat.aantal);

          this.chartService.createColumnChartWithCategory('chartWrapper', 'API Usage', apis, counts);
        },

        error: (err) => {
          this.error.set(`Cannot load because:  ${err.error.message}`);
          this.show.set(true);
        }
      }
    )
  }
}
