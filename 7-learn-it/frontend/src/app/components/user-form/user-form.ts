import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private userService = inject(UserService);

  isEdit = false;
  userId = 0;

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    role: ['student' as 'student' | 'instructor' | 'admin', Validators.required],
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.userId = +id;
      this.userService.getById(this.userId).subscribe((user) => {
        this.form.patchValue(user);
        this.form.controls.password.clearValidators();
        this.form.controls.password.updateValueAndValidity();
      });
    }
  }

  save() {
    if (this.form.invalid) return;
    const payload = this.form.getRawValue();

    const req = this.isEdit
      ? this.userService.update(this.userId, payload)
      : this.userService.create(payload);

    req.subscribe(() => this.router.navigate(['/users']));
  }
}
