import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directives';
//import { AuthService } from '../../services/auth.service';
import { AuthService } from '../../serices/auth.service';
import { MessageService } from 'primeng/api';
import { Route, Router } from '@angular/router';
import { User } from '../../interfaces/auth';
import { response } from 'express';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^([A-Z][a-z]+)(\s[A-Z][a-z]+)?\s([A-Z][a-z]+)\s([A-Z][a-z]+)$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/)]],
    confirmPassword: ['', [Validators.required]]
  },{
    validator: passwordMatchValidator
  });

  constructor(private fb:FormBuilder, 
    private authService: AuthService,
    //private mensaje: MessageService,
    //private messageService:MessageService,
    //private router:Router)
    private router:Router,
    private mensaje: MessageService
  ){

  };

  get name(){
    return this.registerForm.controls['name']
  }

  get email(){
    return this.registerForm.controls['email'];
  }

  get password(){
    return this.registerForm.controls['password'];
  }

  get confirmPassword(){
    return this.registerForm.controls['confirmPassword']
  }

    enviarRegistro() { 

    //console.log(this.registerForm.value)
    //AuthService.const data = {...this.registerForm.value};
    const data ={...this.registerForm.value}
    data.role='admin'

    delete data.confirmPassword;
    
    this.authService.registerUser(data as User).subscribe(
      response => console.log("Agregado"), 
     
    //  error => console.log(error)

    )
  }
    
  }
  //this.mensaje.add({severity:'success', summary:'Success',
    //detail:'Registro Agregado'});
    //this.router.navigate(['login']);

