import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ISendUser } from '../interfaces/isend-user.interface';

//const  API_URL = 'https://peticiones.online/api/users';

@Injectable({
  providedIn: 'root'
})

export class UserService {
private http = inject(HttpClient)
private apiUrl = 'https://peticiones.online/api/users';
  constructor() { }

  getUsers(){
    return this.http.get(`${this.apiUrl}`)
  }

  getUser(_id:string){
    return this.http.get(`${this.apiUrl}/${_id}`)
  }

createUser(user: ISendUser) {
  return this.http.post<ISendUser>(this.apiUrl, user);
}

updateUser(user: ISendUser) {
  return this.http.put<ISendUser>(`${this.apiUrl}/${user._id}`, user);
}

deleteUser(_id: string) {
  return this.http.delete(`${this.apiUrl}/${_id}`);
}


}
