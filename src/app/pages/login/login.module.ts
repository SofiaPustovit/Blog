import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";



@NgModule(
  {

    imports: [
      CommonModule,
      RouterModule.forChild(
        [
          {
            path: '', component: LoginComponent
          }

        ]),
      ReactiveFormsModule
    ],
    declarations:
      [LoginComponent],
    providers:
      [AuthService]
  }
)

export class LoginModule {}
