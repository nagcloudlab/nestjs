import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  {
    path: 'courses',
    loadComponent: () =>
      import('./components/course-list/course-list').then((m) => m.CourseList),
  },
  {
    path: 'courses/new',
    loadComponent: () =>
      import('./components/course-form/course-form').then((m) => m.CourseForm),
    canActivate: [authGuard],
    data: { role: 'admin' },
  },
  {
    path: 'my-enrollments',
    loadComponent: () =>
      import('./components/my-enrollments/my-enrollments').then(
        (m) => m.MyEnrollments,
      ),
    canActivate: [authGuard],
  },
];
