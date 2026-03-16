import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-course-form',
  imports: [ReactiveFormsModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css',
})
export class CourseForm implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private courseService = inject(CourseService);
  private userService = inject(UserService);

  isEdit = false;
  courseId = 0;
  instructors = signal<User[]>([]);

  form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
    instructor_id: [0, Validators.required],
    category: [''],
    difficulty: ['beginner' as 'beginner' | 'intermediate' | 'advanced', Validators.required],
    is_published: [false],
  });

  ngOnInit() {
    this.userService.getAll().subscribe((users) => {
      this.instructors.set(users.filter((u) => u.role === 'instructor'));
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.courseId = +id;
      this.courseService.getById(this.courseId).subscribe((course) => {
        this.form.patchValue({
          ...course,
          description: course.description ?? '',
          category: course.category ?? '',
        });
      });
    }
  }

  save() {
    if (this.form.invalid) return;
    const payload = this.form.getRawValue();

    const req = this.isEdit
      ? this.courseService.update(this.courseId, payload)
      : this.courseService.create(payload);

    req.subscribe(() => this.router.navigate(['/courses']));
  }
}
