import { Component } from '@angular/core';
import { NavbarComponent } from "./header/navbar/navbar.component";
import { HeroSectionComponent } from './header/hero-section/hero-section.component';
import { TestimonialComponent } from "./testimonials/testimonial/testimonial.component";
import { CourseComponent } from './courses/course/course.component';
import { FooterComponent } from './footer/footer.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroSectionComponent, TestimonialComponent,CourseComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
