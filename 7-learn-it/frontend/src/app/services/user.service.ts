import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, CreateUserPayload } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private url = '/api/users';

  getAll() {
    return this.http.get<User[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  create(payload: CreateUserPayload) {
    return this.http.post<User>(this.url, payload);
  }

  update(id: number, payload: Partial<CreateUserPayload>) {
    return this.http.put<User>(`${this.url}/${id}`, payload);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
