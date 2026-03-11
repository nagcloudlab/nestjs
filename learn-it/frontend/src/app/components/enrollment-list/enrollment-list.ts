import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Enrollment } from '../../models/enrollment.model';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-enrollment-list',
  imports: [RouterLink, FormsModule, DatePipe],
  templateUrl: './enrollment-list.html',
  styleUrl: './enrollment-list.css',
})
export class EnrollmentList implements OnInit {
  private enrollmentService = inject(EnrollmentService);
  enrollments = signal<Enrollment[]>([]);

  ngOnInit() {
    this.load();
  }

  load() {
    this.enrollmentService.getAll().subscribe((data) => this.enrollments.set(data));
  }

  updateProgress(e: Enrollment, progress: number) {
    this.enrollmentService
      .updateProgress(e.user_id, e.course_id, progress)
      .subscribe(() => this.load());
  }

  unenroll(e: Enrollment) {
    if (!confirm('Unenroll this student?')) return;
    this.enrollmentService
      .unenroll(e.user_id, e.course_id)
      .subscribe(() => this.load());
  }
}
