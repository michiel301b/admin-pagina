import {inject} from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private http = inject(HttpClient)

  login(username:string, email:string, password:string): Observable<any> {
    return this.http.post(`http://localhost:8000/memory/login`, {
      username, email, password
    })
  }
}
