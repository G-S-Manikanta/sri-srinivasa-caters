import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  timeline = [
    { year: '1998', title: 'The Auspicious Inception', desc: 'Started with a humble devotion to Vedic catering and pure vegetarian wedding feasts in South India.' },
    { year: '2008', title: 'Mastering Royal Banquets', desc: 'Expanded to large-scale wedding mandapams, catering up to 5,000+ guests with synchronized banana-leaf service.' },
    { year: '2018', title: 'Modern Culinary Innovations', desc: 'Introduced live artisanal tiffin counters, signature Elaneer Payasams, and contemporary presentation while upholding pure ghee heritage.' },
    { year: 'Today', title: 'Trusted Across South India', desc: 'Over 1,500+ landmark weddings catered across Chennai, Bangalore, Hyderabad, and Tier-1 wedding destinations.' }
  ];

  values = [
    { icon: 'fas fa-om', title: 'Vedic Sanctity', desc: 'Strictly pure vegetarian food prepared with ritual cleanliness and heartfelt reverence.' },
    { icon: 'fas fa-mortar-pestle', title: 'Heirloom Recipes', desc: 'No artificial flavors, commercial pastes, or preservatives. 100% stone-ground masalas.' },
    { icon: 'fas fa-heart', title: 'Athithi Devo Bhava', desc: 'Treating every wedding guest as the Divine with unconditional warmth and humble service.' },
    { icon: 'fas fa-award', title: 'Flawless Execution', desc: 'Punctual, hot food delivery, pristine dining hall hygiene, and spotless banquet stewardship.' }
  ];
}
