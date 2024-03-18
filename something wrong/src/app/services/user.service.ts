import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ISendUser } from '../interfaces/isend-user.interface';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser.interface';
import { ActivatedRoute } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class UserService {

private http = inject(HttpClient);
private apiUrl = 'https://peticiones.online/api/users';

  constructor(
    private route: ActivatedRoute,
    
  ) { }

  getUsers() : Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this.apiUrl}`)
  }

  getUser(_id:string):Observable<IUser>{
    return this.http.get<IUser>(`${this.apiUrl}/${_id}`)
  }

  createUser(user: ISendUser) {
  return this.http.post<ISendUser>(this.apiUrl, user);
  }

  updateUser(user: ISendUser): Observable<ISendUser> {
    return this.http.put<ISendUser>(`${this.apiUrl}/${user._id}`, user);
  }

  deleteUser(_id: string): Observable<any>  {
  return this.http.delete(`${this.apiUrl}/${_id}`);
  }


}
