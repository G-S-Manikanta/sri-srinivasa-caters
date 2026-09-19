import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FullReview {
  id: number;
  name: string;
  familyTitle: string;
  event: string;
  venue: string;
  guestCount: string;
  quote: string;
  rating: number;
  highlightDish: string;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  reviews: FullReview[] = [
    {
      id: 1,
      name: 'Smt. Radhika & Sri. Venkatachalam',
      familyTitle: 'Bride’s Parents',
      event: 'Grand Muhurtham & Reception',
      venue: 'Mayor Ramanathan Chettiar Hall, Chennai',
      guestCount: '2,500 Guests',
      quote: 'Sri Srinivasa Caters turned our daughter’s wedding into a royal culinary festival. From the morning Ghee Podi Thatte Idlis to the afternoon 24-item Virundhu, every single dish was cooked with pure cow ghee and served with genuine warmth. Our relatives are still talking about the Elaneer Payasam and hot Mysore Pak.',
      rating: 5,
      highlightDish: 'Elaneer Payasam & Ghee Mysore Pak',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Dr. Subramanian & Dr. Janaki',
      familyTitle: 'Family Elders',
      event: '60th Shashtipoorthi Celebrations',
      venue: 'Palace Grounds, Bangalore',
      guestCount: '1,200 Guests',
      quote: 'The reverence with which their traditional servers laid out the banana leaf meals was deeply touching. The Aru Suvai balance was impeccably met — the Koil Pulihora, Drumstick Sambar, and Pineapple Rasam brought tears of joy to our elders. Clean, punctual, and divine.',
      rating: 5,
      highlightDish: 'Koil Pulihora & Pineapple Pepper Rasam',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Ananya & Karthik Sundaram',
      familyTitle: 'The Newlyweds',
      event: 'Traditional Wedding & Sangeet',
      venue: 'Hitex Exhibition Center, Hyderabad',
      guestCount: '3,000 Guests',
      quote: 'Managing 3,000 guests across 3 days without a single delay or cold dish is a monumental achievement. Sri Srinivasa Caters made our wedding unforgettable. Their live dosa counter and brass davarah filter coffee station were the absolute stars of the evening!',
      rating: 5,
      highlightDish: 'Live Ghee Roast Paper Dosa & Degree Kaapi',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Sri. Balaji Srinivasan',
      familyTitle: 'Home Owner',
      event: 'Gruhapravesam (Housewarming)',
      venue: 'Jubilee Hills, Hyderabad',
      guestCount: '450 Guests',
      quote: 'The morning homam prasadam and fresh tiffin spread made our new home feel blessed. Every guest felt personally attended to. Highly recommended for families looking for pure Vedic catering with no shortcuts.',
      rating: 5,
      highlightDish: 'Satvik Homam Prasad & Rava Kichadi',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&auto=format&fit=crop'
    }
  ];
}
