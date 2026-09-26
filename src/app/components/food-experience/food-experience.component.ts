import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CulinaryPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
  image: string;
  temperature: string;
}

@Component({
  selector: 'app-food-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './food-experience.component.html',
  styleUrls: ['./food-experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodExperienceComponent {
  readonly activeIndex = signal(0);

  readonly pillars: CulinaryPillar[] = [
    {
      id: 'wood-fire',
      number: '01',
      title: 'Wood-Fired Simmering',
      subtitle: 'Heavy Brass Urli & Slow Woodhearth',
      description: 'Slow-simmered in heavy consecrated brass vessels over controlled firewood flames to extract deep aromatics, preserve vital nutrients, and impart authentic smoke-kissed depth.',
      icon: 'fas fa-fire-alt',
      badge: 'TIME-TESTED CRAFT',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2600&auto=format&fit=crop',
      temperature: 'Slow Simmer • 4+ Hours'
    },
    {
      id: 'stone-ground',
      number: '02',
      title: 'Stone-Ground Spices',
      subtitle: 'Daily Fresh Stone Mills (Ammikallu)',
      description: 'Whole spices freshly roasted at dawn and ground on traditional stone mills, preserving essential aromatic oils and creating bold, complex spice profiles never matched by factory powders.',
      icon: 'fas fa-mortar-pestle',
      badge: 'ZERO PRESERVATIVES',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2600&auto=format&fit=crop',
      temperature: 'Stone Milled Daily'
    },
    {
      id: 'cow-ghee',
      number: '03',
      title: 'Pure Cow Ghee Sanctity',
      subtitle: 'Churned Golden Butter & Aromatics',
      description: 'Only 100% pure churned golden cow ghee enters our kitchen. From glistening Mysore Pak to fragrant Paruppu Nei Sadham, every morsel carries sacred golden richness.',
      icon: 'fas fa-droplet',
      badge: '100% PURE COW GHEE',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=2600&auto=format&fit=crop',
      temperature: 'Slow Clarified Ghee'
    },
    {
      id: 'farm-fresh',
      number: '04',
      title: 'Farm-Fresh Harvest',
      subtitle: 'Handpicked Dawn Produce & Native Herbs',
      description: 'Handpicked local country vegetables, tender native drumsticks, fresh grated coconuts, small shallots, and fragrant curry leaves procured at dawn for every single feast.',
      icon: 'fas fa-seedling',
      badge: 'DAWN SOURCED',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2600&auto=format&fit=crop',
      temperature: 'Harvested Daily'
    }
  ];

  selectPillar(index: number): void {
    this.activeIndex.set(index);
  }
}
