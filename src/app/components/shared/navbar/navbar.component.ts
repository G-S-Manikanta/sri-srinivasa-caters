import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  isSticky = false;
  isHidden = false;
  private lastScrollPosition = 0;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;

    // Sticky state
    this.isSticky = currentScroll > 30;

    // Smart directional hide/reveal
    if (currentScroll > 120 && currentScroll > this.lastScrollPosition && !this.isMenuOpen) {
      // Scrolling down -> hide navbar
      this.isHidden = true;
    } else {
      // Scrolling up -> reveal navbar
      this.isHidden = false;
    }

    this.lastScrollPosition = Math.max(0, currentScroll);
  }
}
