import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

type Game = {
  day:string;
  score:number;
  api:string;
  color_closed:string;
  color_found:string;
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private http = inject(HttpClient);

  private getAuth() {
    const token = localStorage.getItem('token');
    return {
      Authorization: `Bearer ${token}`
    }
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`http://localhost:8000/admin/games`, {
      headers: this.getAuth()
    })
  }

  getDates(): Observable<Record<string, number>> {
    return this.http.get<Record<string, number>>(`http://localhost:8000/admin/dates`, {
      headers: this.getAuth()
    })
  }

  getAgrregate(): Observable<any> {
    return this.http.get(`http://localhost:8000/admin/aggregate`, {
      headers: this.getAuth()
    })
  }

  getPlayers(): Observable<any> {
    return this.http.get(`http://localhost:8000/admin/players`, {
      headers: this.getAuth()
    })
  }
}
