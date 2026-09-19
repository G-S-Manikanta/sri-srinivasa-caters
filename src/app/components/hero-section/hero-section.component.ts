import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('bgVideo') bgVideoRef?: ElementRef<HTMLVideoElement>;
  videoLoaded = false;

  ngAfterViewInit(): void {
    const video = this.bgVideoRef?.nativeElement;
    if (video) {
      // Ensure autoplay on iOS and modern browsers
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.videoLoaded = true;
          })
          .catch(() => {
            // Autoplay was prevented; fallback poster remains active
            this.videoLoaded = true;
          });
      }
    }
  }

  scrollToNext(): void {
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: 'smooth'
    });
  }
}
