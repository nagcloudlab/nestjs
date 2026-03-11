import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  private userService = inject(UserService);
  private courseService = inject(CourseService);
  private enrollmentService = inject(EnrollmentService);

  userCount = signal(0);
  courseCount = signal(0);
  enrollmentCount = signal(0);

  ngOnInit() {
    forkJoin({
      users: this.userService.getAll(),
      courses: this.courseService.getAll(),
      enrollments: this.enrollmentService.getAll(),
    }).subscribe(({ users, courses, enrollments }) => {
      this.userCount.set(users.length);
      this.courseCount.set(courses.length);
      this.enrollmentCount.set(enrollments.length);
    });
  }
}
