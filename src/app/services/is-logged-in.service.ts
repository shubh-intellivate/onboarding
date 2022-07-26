import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class IsLoggedIn {
  constructor(
    private routes: Router) {
  }

  resolve(): void {
    if (localStorage.getItem('username')) this.routes.navigate(['/home'])
  }
}
