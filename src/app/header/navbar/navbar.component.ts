import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const nav = document.querySelector("nav");
    if (window.pageYOffset > 20) {
      nav?.classList.add("scrolled");
    } else {
      nav?.classList.remove("scrolled");
}
}

}
