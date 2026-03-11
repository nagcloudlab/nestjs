import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course, CreateCoursePayload } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private http = inject(HttpClient);
  private url = '/api/courses';

  getAll() {
    return this.http.get<Course[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Course>(`${this.url}/${id}`);
  }

  create(payload: CreateCoursePayload) {
    return this.http.post<Course>(this.url, payload);
  }

  update(id: number, payload: Partial<CreateCoursePayload>) {
    return this.http.put<Course>(`${this.url}/${id}`, payload);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
