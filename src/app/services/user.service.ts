import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  buscar() {
    return this.http.get('http://reqres.in/api/users?page=2');
  }


}
