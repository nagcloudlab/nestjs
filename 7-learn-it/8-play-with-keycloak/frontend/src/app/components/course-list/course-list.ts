import { Component, inject, signal, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  private courseService = inject(CourseService);
  private enrollmentService = inject(EnrollmentService);
  private keycloak = inject(Keycloak);

  courses = signal<Course[]>([]);
  enrolledCourseIds = signal<Set<number>>(new Set());
  authenticated = signal(false);

  ngOnInit() {
    this.authenticated.set(!!this.keycloak.authenticated);
    this.loadCourses();
    if (this.authenticated()) {
      this.loadEnrollments();
    }
  }

  loadCourses() {
    this.courseService.findAll().subscribe((data) => this.courses.set(data));
  }

  loadEnrollments() {
    this.enrollmentService.findMine().subscribe((data) => {
      this.enrolledCourseIds.set(new Set(data.map((e) => e.courseId)));
    });
  }

  enroll(courseId: number) {
    if (!this.authenticated()) {
      this.keycloak.login();
      return;
    }
    this.enrollmentService.enroll(courseId).subscribe(() => {
      this.enrolledCourseIds.update((ids) => new Set([...ids, courseId]));
    });
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds().has(courseId);
  }
}
