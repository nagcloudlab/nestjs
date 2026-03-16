import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private http = inject(HttpClient);
  private url = '/api/courses';

  findAll() {
    return this.http.get<Course[]>(this.url);
  }

  findOne(id: number) {
    return this.http.get<Course>(`${this.url}/${id}`);
  }

  create(course: Partial<Course>) {
    return this.http.post<Course>(this.url, course);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
