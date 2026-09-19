import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface WeddingTestimonial {
  id: number;
  quote: string;
  clientName: string;
  event: string;
  location: string;
  guestCount: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials-slider',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './testimonials-slider.component.html',
  styleUrls: ['./testimonials-slider.component.scss']
})
export class TestimonialsSliderComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private intervalId: any;

  testimonials: WeddingTestimonial[] = [
    {
      id: 1,
      quote: 'Sri Srinivasa Caters turned our daughter’s Kalyanam into a royal dining experience. The Kalyana Murungakkai Sambar, Elaneer Payasam, and hot Ghee Mysore Pak are still the talk of our family and relatives.',
      clientName: 'Smt. Radhika & Sri. Venkatachalam',
      event: 'Traditional Muhurtham & Reception',
      location: 'Mayor Ramanathan Mandapam, Chennai',
      guestCount: '2,500 Guests',
      rating: 5
    },
    {
      id: 2,
      quote: 'The sanctity and traditional service on the banana leaf was flawless. Their staff served in traditional veshtis with utmost humility and warmth. Not a single guest left without praising the feast.',
      clientName: 'Dr. Subramanian & Family',
      event: 'Grand Shashtipoorthi Celebration',
      location: 'Palace Grounds, Bangalore',
      guestCount: '1,200 Guests',
      rating: 5
    },
    {
      id: 3,
      quote: 'From morning Podi Thatte Idlis and fragrant degree Kaapi to the grand afternoon 24-item Virundhu, their time management, hot food delivery, and pure cow ghee flavor were simply extraordinary.',
      clientName: 'Ananya & Karthik Sundaram',
      event: 'Wedding & Sangeet Feasts',
      location: 'Hitex Exhibition Center, Hyderabad',
      guestCount: '3,000 Guests',
      rating: 5
    }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 8000);
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  setSlide(index: number): void {
    this.currentIndex = index;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
