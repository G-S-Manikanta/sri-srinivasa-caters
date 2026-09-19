import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  specialties = [
    {
      id: '01',
      title: '100% Pure Cow Ghee',
      desc: 'We never compromise with commercial oils in traditional dishes. Our sweets, paruppu, and biryanis are enriched with pure, fragrant cow ghee.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop',
      badge: 'Uncompromised Purity'
    },
    {
      id: '02',
      title: 'Stone-Ground Masalas',
      desc: 'Whole coriander, dried Guntur chilies, cumin, and black pepper are hand-roasted and ground fresh daily on traditional stone mills.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop',
      badge: 'Artisanal Spices'
    },
    {
      id: '03',
      title: 'Zero Artificial Preservatives',
      desc: 'No artificial food colors, no tasting salts (MSG), and no premade commercial gravies. Pure satvik culinary integrity in every bite.',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1200&auto=format&fit=crop',
      badge: '100% Natural'
    }
  ];
}
