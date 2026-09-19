import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CateringServiceItem {
  id: number;
  title: string;
  category: string;
  description: string;
  capacity: string;
  image: string;
  highlights: string[];
}

@Component({
  selector: 'app-services-cards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services-cards.component.html',
  styleUrls: ['./services-cards.component.scss']
})
export class ServicesCardsComponent {
  activeServiceIndex = 0;

  services: CateringServiceItem[] = [
    {
      id: 1,
      title: 'Wedding Catering',
      category: 'Muhurtham & Reception',
      description: 'Grand, auspicious traditional wedding feasts curated with bespoke menus, live counters, and reverent banana leaf service.',
      capacity: '500 to 10,000+ Guests',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2600&auto=format&fit=crop',
      highlights: ['Traditional Banana Leaf Feast', 'Live Dosa & Tiffin Counters', 'Grand Sweet Display']
    },
    {
      id: 2,
      title: 'Traditional South Indian Meals',
      category: 'Authentic Virundhu',
      description: 'Classic Elai Saapadu featuring 24+ traditional dishes, fragrant ghee, slow-cooked sambar, and artisanal payasams.',
      capacity: '100 to 5,000 Guests',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=2600&auto=format&fit=crop',
      highlights: ['Authentic 24-Item Spread', 'Aru Suvai Balance', 'Traditional Servers in Veshti']
    },
    {
      id: 3,
      title: 'Housewarming Functions',
      category: 'Gruhapravesam',
      description: 'Auspicious morning tiffins, fragrant filter coffee, and joyous afternoon feasts to bless your new home with prosperity.',
      capacity: '50 to 1,500 Guests',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2600&auto=format&fit=crop',
      highlights: ['Morning Homam Prasad', 'Fresh Ghee Podi Idli', 'Brass Kaapi Station']
    },
    {
      id: 4,
      title: 'Engagements',
      category: 'Nischithartham',
      description: 'Elegant gatherings celebrating family alliances with sophisticated sweet platters, savoury delicacies, and curated buffets.',
      capacity: '100 to 1,000 Guests',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2600&auto=format&fit=crop',
      highlights: ['Signature Dessert Tables', 'Mocktails & Welcome Drinks', 'Interactive Live Chaat']
    },
    {
      id: 5,
      title: 'Birthday Celebrations',
      category: 'Milestones & Shashtipoorthi',
      description: 'From 1st birthdays to 60th Shashtipoorthi and 80th Sathabhishekam celebrations, honouring milestones with warmth.',
      capacity: '50 to 800 Guests',
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2600&auto=format&fit=crop',
      highlights: ['Custom Multi-course Menu', 'Traditional & Modern Sweets', 'Kid & Elder Friendly Options']
    },
    {
      id: 6,
      title: 'Corporate Events',
      category: 'Executive Hospitality',
      description: 'Punctual, hygienic, and impeccable executive dining for corporate galas, seminars, conferences, and annual meets.',
      capacity: '100 to 3,000 Guests',
      image: 'https://images.unsplash.com/photo-1551893309-c4a45a3536df?q=80&w=2600&auto=format&fit=crop',
      highlights: ['Executive Buffet Setup', 'Hygienic Packed Lunches', 'Continuous Beverage Support']
    },
    {
      id: 7,
      title: 'Religious Functions',
      category: 'Pujas, Vrathams & Utsavams',
      description: 'Strictly Satvik and pure vegetarian prasadam, cooked with religious sanctity and traditional Vedic guidelines (No onion/garlic options).',
      capacity: '50 to 5,000 Guests',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2600&auto=format&fit=crop',
      highlights: ['Satvik / No Onion-Garlic', 'Traditional Prasadam', 'Vessel Purity Standards']
    },
    {
      id: 8,
      title: 'Family Gatherings',
      category: 'Seemantham & Reunions',
      description: 'Intimate celebrations and baby showers featuring traditional 5-rice varieties (Chitrannam) and festive snacks.',
      capacity: '30 to 500 Guests',
      image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2600&auto=format&fit=crop',
      highlights: ['Traditional 5 Variety Rice', 'Handmade Murukku & Laddus', 'Cozy Homestyle Service']
    },
    {
      id: 9,
      title: 'Private Events',
      category: 'Bespoke Dining',
      description: 'Tailored culinary hospitality for VIP gatherings, private banquets, and exclusive lawn dining celebrations.',
      capacity: '25 to 300 Guests',
      image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=2600&auto=format&fit=crop',
      highlights: ['Dedicated Master Chef', 'Custom Plated / Leaf Service', 'Premium Linen & Brassware']
    }
  ];

  selectService(index: number): void {
    this.activeServiceIndex = index;
  }
}
