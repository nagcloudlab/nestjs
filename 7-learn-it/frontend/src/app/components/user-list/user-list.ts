import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  private userService = inject(UserService);
  users = signal<User[]>([]);

  ngOnInit() {
    this.load();
  }

  load() {
    this.userService.getAll().subscribe((data) => this.users.set(data));
  }

  remove(id: number) {
    if (!confirm('Delete this user?')) return;
    this.userService.delete(id).subscribe(() => this.load());
  }
}
