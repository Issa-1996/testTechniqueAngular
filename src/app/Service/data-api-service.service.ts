import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../Model/User.model';

@Injectable({
  providedIn: 'root',
})
export class DataApiServiceService {
  headers = new HttpHeaders({ Accept: '*/*' });
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<UserModel> {
    return this.httpClient.get<UserModel>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
  getUsersById(data: any): Observable<UserModel> {
    return this.httpClient.get<UserModel>(
      'https://jsonplaceholder.typicode.com/users/'+data.id+'/todos'
    );
  }
}
