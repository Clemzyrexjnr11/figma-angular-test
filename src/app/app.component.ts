import { Component } from '@angular/core';
import { NavbarComponent } from "./header/navbar/navbar.component";
import { HeroSectionComponent } from './header/hero-section/hero-section.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
