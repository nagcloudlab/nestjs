import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnrollmentService } from '../../services/enrollment.service';
import { UserService } from '../../services/user.service';
import { CourseService } from '../../services/course.service';
import { User } from '../../models/user.model';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-enrollment-form',
  imports: [ReactiveFormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentForm implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private enrollmentService = inject(EnrollmentService);
  private userService = inject(UserService);
  private courseService = inject(CourseService);

  students = signal<User[]>([]);
  courses = signal<Course[]>([]);

  form = this.fb.nonNullable.group({
    user_id: [0, Validators.required],
    course_id: [0, Validators.required],
  });

  ngOnInit() {
    this.userService.getAll().subscribe((users) => {
      this.students.set(users.filter((u) => u.role === 'student'));
    });
    this.courseService.getAll().subscribe((courses) => this.courses.set(courses));
  }

  save() {
    if (this.form.invalid) return;
    this.enrollmentService.enroll(this.form.getRawValue()).subscribe(() => {
      this.router.navigate(['/enrollments']);
    });
  }
}
