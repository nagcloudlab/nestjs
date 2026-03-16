import { Component, inject, signal, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment.service';
import { Enrollment } from '../../models/enrollment.model';

@Component({
  selector: 'app-my-enrollments',
  imports: [DatePipe],
  templateUrl: './my-enrollments.html',
  styleUrl: './my-enrollments.css',
})
export class MyEnrollments implements OnInit {
  private enrollmentService = inject(EnrollmentService);

  enrollments = signal<Enrollment[]>([]);

  ngOnInit() {
    this.loadEnrollments();
  }

  loadEnrollments() {
    this.enrollmentService
      .findMine()
      .subscribe((data) => this.enrollments.set(data));
  }

  unenroll(courseId: number) {
    this.enrollmentService.unenroll(courseId).subscribe(() => {
      this.enrollments.update((list) =>
        list.filter((e) => e.courseId !== courseId),
      );
    });
  }
}
