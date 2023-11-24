import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: 'registro.component.html',
  styleUrls: ['registro.component.css']
})
export class RegistroComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Registro exitoso', response);
        this.router.navigate(['/iniciarsesion']);
      },
      error => {
        console.error('Error durante el registro', error);
      }
    );
  }
}
