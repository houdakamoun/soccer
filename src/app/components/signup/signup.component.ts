import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/shared/Cpwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  user: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private userservite: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    console.log(window.location);
    let role = window.location.pathname === '/signupAdmin' ? 'Admin' : 'user';
    this.signupForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.maxLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        tel: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
            ),
          ],
        ],
        cpassword: [''],
        role: [role],
      },
      { validators: MustMatch('password', 'cpassword') }
    );
  }
  signup() {
    console.log(this.signupForm.value);
    this.userservite.inscri(this.signupForm.value).subscribe((res) => {
      if (res.message === '1') {
        this.toastr.error('signup!', 'email exist!');
      } else if (res.message === '0') {
        this.toastr.success('signup Successful!', 'Success');
      }
    });
  }
}
