import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface DetailedService {
  id: number;
  title: string;
  regionalTag: string;
  subtitle: string;
  description: string;
  capacity: string;
  image: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: DetailedService[] = [
    {
      id: 1,
      title: 'Grand Wedding Muhurtham Catering',
      regionalTag: 'Kalyana Virundhu',
      subtitle: 'The quintessential royal South Indian wedding banquet experience.',
      description: 'Our flagship wedding catering package offers complete banquet stewardship. We execute multi-course traditional banana leaf meals featuring up to 24 authentic items, coordinated traditional servers in veshtis, and grand evening reception buffets.',
      capacity: '500 to 10,000+ Guests',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2600&auto=format&fit=crop',
      features: ['24-Item Royal Banana Leaf Feast', 'Synchronized Veshti-Clad Servers', 'Live Artisanal Tiffin Counters', 'Grand Wedding Sweet Display']
    },
    {
      id: 2,
      title: 'Traditional Banana Leaf Meals',
      regionalTag: 'Elai Saapadu',
      subtitle: 'Authentic festive meals honoring the sacred sequence of South Indian dining.',
      description: 'Experience pure gastronomy with fresh plantain leaf dining. Every item is ladled hot — from yellow moong dal drenched in ghee to shallot sambar, Mysore rasam, and tender coconut payasam.',
      capacity: '100 to 5,000 Guests',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=2600&auto=format&fit=crop',
      features: ['Aru Suvai (Six Tastes) Balance', '100% Pure Cow Ghee Preparations', 'Traditional Pickles & Podis', 'Digestive Rasam & Buttermilk Finale']
    },
    {
      id: 3,
      title: 'Housewarming Functions',
      regionalTag: 'Gruhapravesam',
      subtitle: 'Auspicious morning tiffins and celebratory feasts to bless your new home.',
      description: 'Begin your auspicious new chapter with fragrant morning prasad, fluffy Ghee Podi Thatte Idlis, crispy Medu Vadais, filter coffee, and an afternoon festive meal for all well-wishers.',
      capacity: '50 to 1,500 Guests',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2600&auto=format&fit=crop',
      features: ['Morning Homam Prasad Offerings', 'Live Hot Dosa & Idli Station', 'Degree Filter Kaapi Service', 'Auspicious Sweet Boxes for Guests']
    },
    {
      id: 4,
      title: 'Engagement & Sangeet Banquets',
      regionalTag: 'Nischithartham',
      subtitle: 'Sophisticated multi-regional culinary spreads for family alliances.',
      description: 'Delight both sides of the family with curated fusion menus, interactive live chaat counters, artisanal mocktails, and rich South Indian sweet banquets.',
      capacity: '100 to 1,000 Guests',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2600&auto=format&fit=crop',
      features: ['Interactive Live Chaat & Tiffin', 'Artisanal Dessert & Halwa Bars', 'Custom Mocktails & Coolers', 'Executive Buffet Styling']
    },
    {
      id: 5,
      title: 'Shashtipoorthi & Sathabhishekam',
      regionalTag: '60th & 80th Milestone Celebrations',
      subtitle: 'Honoring our elders with comforting, authentic traditional feasts.',
      description: 'Milestone life celebrations deserve nostalgic, authentic flavors that take elders back to their roots. We prepare gentle, digestible, and soul-satisfying feasts with pure ghee.',
      capacity: '50 to 800 Guests',
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2600&auto=format&fit=crop',
      features: ['Classic Nostalgic Andhra/Tamil Menus', 'Elder-friendly Digestion Focus', 'Traditional Laddus & Mysore Pak', 'Attentive Table Hospitality']
    },
    {
      id: 6,
      title: 'Corporate Galas & Executive Lunches',
      regionalTag: 'Corporate Hospitality',
      subtitle: 'Punctual, hygienic, and impeccable executive dining services.',
      description: 'Elevate your corporate conferences, annual general meets, and executive galas with polished vegetarian buffets, live counters, and seamless service.',
      capacity: '100 to 3,000 Guests',
      image: 'https://images.unsplash.com/photo-1551893309-c4a45a3536df?q=80&w=2600&auto=format&fit=crop',
      features: ['Strict Punctuality Guarantee', 'Hygienic Eco-Friendly Packaging Options', 'Continuous Coffee & Tea Stations', 'Dedicated Banquet Managers']
    },
    {
      id: 7,
      title: 'Religious Pujas & Utsavams',
      regionalTag: 'Satvik Prasadam',
      subtitle: 'Vedic cleanliness and pure vegetarian prasadam without onion and garlic.',
      description: 'For temple festivals, family vrathams, and homams, we cook with pristine religious sanctity, pure brass cookware, and strict Satvik ingredients.',
      capacity: '50 to 5,000 Guests',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2600&auto=format&fit=crop',
      features: ['100% Satvik / No Onion & No Garlic', 'Temple Prasadam Recipes', 'Vessel & Kitchen Sanctity Standards', 'Cow Ghee Sweet Offerings']
    },
    {
      id: 8,
      title: 'Seemantham (Baby Shower) & Reunions',
      regionalTag: 'Traditional Chitrannam',
      subtitle: 'The celebrated 5-variety rice feast and joyous celebratory snacks.',
      description: 'Celebrate motherhood with traditional Chitrannams (Pulihora, Lemon Rice, Coconut Rice, Curd Rice, Sambar Rice) along with crunchy murukkus and sweet laddus.',
      capacity: '30 to 500 Guests',
      image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2600&auto=format&fit=crop',
      features: ['Traditional 5-Variety Rice (Chitrannam)', 'Handmade Sweets & Savoury Packs', 'Cozy Homestyle Dining Care', 'Custom Family Menu Additions']
    },
    {
      id: 9,
      title: 'Private Banquets & VIP Dining',
      regionalTag: 'Bespoke Feast',
      subtitle: 'Exclusive culinary hospitality for intimate family occasions.',
      description: 'Dedicated master chefs craft customized multi-course menus served with fine brassware, premium linen, and bespoke hospitality.',
      capacity: '25 to 300 Guests',
      image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=2600&auto=format&fit=crop',
      features: ['Dedicated Executive Master Chef', 'Bespoke Banana Leaf / Plated Service', 'Fine Brass Davarah & Utensils', 'White-Glove Hospitality']
    }
  ];
}
