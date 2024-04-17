import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000';
  
  constructor( private http:HttpClient) { }

  registerUser(usuario: User):Observable<any>{
    console.log('Usuario ' + JSON.stringify(usuario))
    return this.http.post(`${this.baseUrl}/usuario`, usuario)
  }

  getUserByEmail(email:string):Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/usuario?email=${email}`)
  }

}
