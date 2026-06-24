import {Component, inject, signal, WritableSignal} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {ChartService} from '../../services/chart.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.html',
  standalone: true,
  styleUrl: './dates.css',
})
export class Dates {

  private httpService = inject(HttpService);
  private chartService = inject(ChartService);

  error:WritableSignal<string> = signal("");
  show:WritableSignal<boolean> = signal(false);
  data:WritableSignal<Record<string, number>> = signal({});

  ngOnInit() {
    this.httpService.getDates().subscribe({
        next: (data: any) => {
          this.data.set(data);
          const entries = Object.entries(data) as [string, number][];
          const dates = entries.map(([date]) => date);
          const games = entries.map(([, value]) => value);

          this.chartService.createLineChart('chartWrapper', 'Games per day', dates, games);
        },
        error: (err) => {
          this.error.set(`Cannot load because:  ${err.error.message}`);
          this.show.set(true);
        }
      }
    )
  }
}
