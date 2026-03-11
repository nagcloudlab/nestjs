import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  imports: [RouterLink],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  private courseService = inject(CourseService);
  courses = signal<Course[]>([]);

  ngOnInit() {
    this.load();
  }

  load() {
    this.courseService.getAll().subscribe((data) => this.courses.set(data));
  }

  remove(id: number) {
    if (!confirm('Delete this course?')) return;
    this.courseService.delete(id).subscribe(() => this.load());
  }
}
