import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.authService.login(this.userForm.value).subscribe((res) => {
      this.router.navigate(['']);
    });
  }
}
