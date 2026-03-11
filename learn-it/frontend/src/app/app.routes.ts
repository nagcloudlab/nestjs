import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./components/user-list/user-list').then((m) => m.UserList),
  },
  {
    path: 'users/new',
    loadComponent: () =>
      import('./components/user-form/user-form').then((m) => m.UserForm),
  },
  {
    path: 'users/:id/edit',
    loadComponent: () =>
      import('./components/user-form/user-form').then((m) => m.UserForm),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./components/course-list/course-list').then((m) => m.CourseList),
  },
  {
    path: 'courses/new',
    loadComponent: () =>
      import('./components/course-form/course-form').then((m) => m.CourseForm),
  },
  {
    path: 'courses/:id/edit',
    loadComponent: () =>
      import('./components/course-form/course-form').then((m) => m.CourseForm),
  },
  {
    path: 'enrollments',
    loadComponent: () =>
      import('./components/enrollment-list/enrollment-list').then(
        (m) => m.EnrollmentList
      ),
  },
  {
    path: 'enrollments/new',
    loadComponent: () =>
      import('./components/enrollment-form/enrollment-form').then(
        (m) => m.EnrollmentForm
      ),
  },
];
