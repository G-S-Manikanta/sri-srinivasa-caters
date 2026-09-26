import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-visual-story',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './visual-story.component.html',
  styleUrls: ['./visual-story.component.scss']
})
export class VisualStoryComponent {
  @ViewChild('trackContainer') trackRef?: ElementRef<HTMLElement>;

  scrollProgress = 0; // 0.0 to 1.0
  activeSubWord = 0;

  subWords = [
    { text: 'WEDDINGS', desc: 'Auspicious Muhurtham feasts blessed with sacred mantras.' },
    { text: 'FAMILY', desc: 'Bringing generations together around traditional dining tables.' },
    { text: 'CELEBRATION', desc: 'Joyous festivities enriched by timeless culinary craftsmanship.' },
    { text: 'HOSPITALITY', desc: 'Athithi Devo Bhava — honoring every single guest with pure love.' }
  ];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (!this.trackRef) return;
    const el = this.trackRef.nativeElement;
    const rect = el.getBoundingClientRect();
    const totalScrollable = el.offsetHeight - window.innerHeight;
    
    if (totalScrollable > 0) {
      const current = -rect.top;
      const progress = Math.max(0, Math.min(1, current / totalScrollable));
      this.scrollProgress = progress;

      // Select active word based on 4 quadrants of scroll
      const wordIdx = Math.min(3, Math.floor(progress * 4));
      this.activeSubWord = wordIdx;
    }
  }
}
