import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { AuthService } from '../../services/auth.service';
import { AuthService } from '../../serices/auth.service';
import { MessageService } from 'primeng/api';
import { Route, Router } from '@angular/router';
import { response } from 'express';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/)]]
  });

  usuarioAutenticado: any
  
  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private messageService:MessageService,
    private router:Router){

  };

  get email(){
    return this.loginForm.controls['email'];
  }

  get password(){
    return this.loginForm.controls['password'];
  }
  login() {
    const { email, password } = this.loginForm.value;
  
    this.authService.getUserByEmail(email as string).subscribe(
      response => {
        // Verifica si la respuesta contiene usuarios
        if (response && response.length > 0) {
          // Si hay usuarios en la respuesta, verifica la contraseña
          const user = response[0]; // Suponiendo que response es un array de usuarios y tomas el primero
          if (user.password === password) {
            // Si la contraseña coincide, redirige al usuario a la página de productos-lista
            this.router.navigate(['/productos-lista']);
          } else {
            // Si la contraseña no coincide, muestra un mensaje de error
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Contraseña incorrecta' });
          }
        } else {
          // Si no hay usuarios en la respuesta, muestra un mensaje de error
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Usuario no encontrado' });
        }
      },
      error => {
        // Si ocurre un error al obtener usuarios, muestra un mensaje de error
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al buscar el usuario' });
      }
    );
  }
  
  
}
