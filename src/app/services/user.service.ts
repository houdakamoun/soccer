import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl = 'http://localhost:3000/user';
  constructor(private httpClient: HttpClient) {}
  inscri(user: any) {
    return this.httpClient.post<{ message: any }>(
      this.userUrl + '/signup',
      user
    );
  }
  getAllById(id: any) {
    return this.httpClient.get<{ user: any }>(`${this.userUrl}/${id}`);
  }
  login(user: any) {
    return this.httpClient.post<{ message: any; user: any }>(
      this.userUrl + '/login',
      user
    );
  }
}
