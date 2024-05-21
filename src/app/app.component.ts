import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./pages/home/components/home-skip-tests/home.component";
import {HeaderModule} from "./modules/header/header.module";
import {FooterModule} from "./modules/footer/footer.module";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderModule, FooterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'home-one';
}
