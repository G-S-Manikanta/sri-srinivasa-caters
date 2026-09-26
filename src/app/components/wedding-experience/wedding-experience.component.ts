import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wedding-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wedding-experience.component.html',
  styleUrls: ['./wedding-experience.component.scss']
})
export class WeddingExperienceComponent {
  @ViewChild('weddingTrack') trackRef?: ElementRef<HTMLElement>;

  scrollProgress = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (!this.trackRef) return;
    const el = this.trackRef.nativeElement;
    const rect = el.getBoundingClientRect();
    const total = el.offsetHeight - window.innerHeight;
    if (total > 0) {
      const curr = -rect.top;
      this.scrollProgress = Math.max(0, Math.min(1, curr / total));
    }
  }
}
