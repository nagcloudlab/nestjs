import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enrollment, CreateEnrollmentPayload } from '../models/enrollment.model';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private http = inject(HttpClient);
  private url = '/api/enrollments';

  getAll() {
    return this.http.get<Enrollment[]>(this.url);
  }

  getByUser(userId: number) {
    return this.http.get<Enrollment[]>(`${this.url}/user/${userId}`);
  }

  getByCourse(courseId: number) {
    return this.http.get<Enrollment[]>(`${this.url}/course/${courseId}`);
  }

  enroll(payload: CreateEnrollmentPayload) {
    return this.http.post<Enrollment>(this.url, payload);
  }

  updateProgress(userId: number, courseId: number, progress: number) {
    return this.http.put<Enrollment>(`${this.url}/${userId}/${courseId}`, { progress });
  }

  unenroll(userId: number, courseId: number) {
    return this.http.delete<void>(`${this.url}/${userId}/${courseId}`);
  }
}
