import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: RegisterForm = {
    email: '',
    password: '',
    cpassword: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form);
  }
}
