import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ChartService} from '../../services/chart.service';
import {HttpService} from '../../services/http.service';

type Game = {
  day:string;
  score:number;
  api:string;
  color_closed:string;
  color_found:string;
}

@Component({
  selector: 'app-allgames',
  templateUrl: './allgames.html',
  styleUrl: './allgames.css',

})
export class Allgames implements OnInit {

  private httpService = inject(HttpService);
  private chartService = inject(ChartService);

  error:WritableSignal<string> = signal("");
  show:WritableSignal<boolean> = signal(false);
  data:WritableSignal<Game[]> = signal([]);

  ngOnInit() {
    this.httpService.getGames().subscribe({
        next: (data: any) => {
          this.data.set(data);
          const closedColorData = this.groupColors(data, 'color_closed');
          const openColorData = this.groupColors(data, 'color_found');

          this.chartService.createColumnChartWithoutCategory('closedColorChart', 'Colors used for a closed card', closedColorData);
          this.chartService.createColumnChartWithoutCategory('openColorChart', 'Colors used for an open card', openColorData);
        },

      error: (err) => {
          this.error.set(`Cannot load because:  ${err.error.message}`);
          this.show.set(true);
        }
      }
    )
  }

  groupColors(data:Game[], key: 'color_closed' | 'color_found') {
    const keyvalmap: Record<string, number> = {};
    data.forEach(game => {
      const color = game[key];
      keyvalmap[color] = (keyvalmap[color]|| 0) + 1
    })

    return Object.entries(keyvalmap).map(([color, amount]) => ({
      name: color,
      y: amount,
      color: color
    }));
  }
}
