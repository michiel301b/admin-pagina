import {Component, inject, signal} from '@angular/core';
import { View } from '../../view';
import { FormsModule } from '@angular/forms';
import { WritableSignal } from '@angular/core';
import {AuthService} from '../../services/auth.service';

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

  public view = inject(View);
  public authService = inject(AuthService);

  async login() {
    this.errorMessage.set("");
    this.authService.login(this.username, this.email, this.password).subscribe(
      {next: (result:any) => {
          localStorage.setItem('token', result.token);
          this.view.view.set('players');
        },
        error: error => {
          this.errorMessage.set("Invalid username or password");
        }
      }
    )
  }
}
