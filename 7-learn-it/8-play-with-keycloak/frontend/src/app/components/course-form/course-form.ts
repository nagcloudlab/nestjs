import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-form',
  imports: [FormsModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css',
})
export class CourseForm {
  private courseService = inject(CourseService);
  private router = inject(Router);

  course = {
    title: '',
    description: '',
    category: '',
    difficulty: 'beginner' as string,
    isPublished: true,
  };

  onSubmit() {
    this.courseService.create(this.course).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }
}
