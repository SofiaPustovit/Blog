import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userForm = new FormGroup(
    {
      userName: new FormControl(),
      userPassword: new FormControl()
    }
  )
}  
