import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  private keycloak = inject(Keycloak);

  username = signal('');
  authenticated = signal(false);
  isAdmin = signal(false);

  ngOnInit() {
    this.authenticated.set(!!this.keycloak.authenticated);
    if (this.keycloak.authenticated) {
      this.username.set(
        this.keycloak.tokenParsed?.['preferred_username'] || '',
      );
      const roles: string[] =
        this.keycloak.tokenParsed?.['realm_access']?.['roles'] || [];
      this.isAdmin.set(roles.includes('admin'));
    }
  }

  login() {
    this.keycloak.login();
  }

  logout() {
    this.keycloak.logout({ redirectUri: window.location.origin });
  }
}
