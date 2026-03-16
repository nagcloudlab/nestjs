import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enrollment } from '../models/enrollment.model';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private http = inject(HttpClient);
  private url = '/api/enrollments';

  findMine() {
    return this.http.get<Enrollment[]>(`${this.url}/mine`);
  }

  enroll(courseId: number) {
    return this.http.post<Enrollment>(`${this.url}/${courseId}`, {});
  }

  unenroll(courseId: number) {
    return this.http.delete(`${this.url}/${courseId}`);
  }
}
