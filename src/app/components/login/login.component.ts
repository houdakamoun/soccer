import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(
    private userservite: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  login(): void {
    this.userservite.login(this.user).subscribe((res) => {
      if (res.message == '2') {
        console.log(res.user);
        localStorage.setItem('connectedUser', JSON.stringify(res.user));
        this.router.navigate(['/']);
      } else {
        this.toastr.error('verif your password or your email!', 'login!');
      }
      console.log(res.message);
    });
  }
}
