import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/user';

const API_URL = `${environment.apiURL}/api/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient);

  registerUser(user: User) {
    return this.http.post<{status: boolean, data: User}>(`${API_URL}`, user);
  }

  check_diplicate_email(email: string) {
    return this.http.get<{status: boolean, data: User}>(
      `${API_URL}/check_duplicate_email/${email}`
    )
  }
}
