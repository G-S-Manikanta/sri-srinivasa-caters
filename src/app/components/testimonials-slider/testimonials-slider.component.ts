import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsService } from '../../services/testimonials.service';

@Component({
  selector: 'app-testimonials-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-slider.component.html',
  styleUrls: ['./testimonials-slider.component.scss']
})
export class TestimonialsSliderComponent implements OnInit, OnDestroy {
  testimonials: any[] = [];
  currentTestimonial = 0;
  intervalId: any;

  constructor(private testimonialsService: TestimonialsService) {}

  ngOnInit(): void {
    this.testimonialsService.getTestimonialsData().subscribe(data => {
      this.testimonials = data.testimonials;
    });

    this.intervalId = setInterval(() => {
      this.nextTestimonial();
    }, 7000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  previousTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
  }

  getStarRating(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push('fas fa-star');
      } else {
        stars.push('far fa-star');
      }
    }
    return stars;
  }
}
