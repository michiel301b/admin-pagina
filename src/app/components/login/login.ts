import {Component, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { View } from '../../view';
import { FormsModule } from '@angular/forms';
import { WritableSignal } from '@angular/core';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username:string = "";
  password:string = "";
  email:string = "";
  errorMessage:WritableSignal<string> = signal<string>('');

  constructor(
    public view: View,
    private httpClient: HttpClient
  ) {}

  async login() {
    this.errorMessage.set("");
    console.log('Username:', this.username, 'Email', this.email, 'Password:', this.password);
    this.httpClient.post('http://localhost:8000/memory/login', {
      username: this.username,
      email: this.email,
      password: this.password,
    }).subscribe(
      {
        next: (result:any) => {
          console.log(result);
          localStorage.setItem('token', result.token);
          this.view.view.set('infobox');
        },
        error: error => {
          console.log(error);
          this.errorMessage.set("Invalid username or password");
        }
      }
    )
  }
}
