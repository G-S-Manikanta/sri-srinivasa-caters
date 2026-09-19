import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  aspectClass: string;
  caption: string;
}

@Component({
  selector: 'app-gallery-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})
export class GalleryGridComponent {
  activeCategory = 'all';
  selectedImage: GalleryItem | null = null;

  items: GalleryItem[] = [
    {
      id: 1,
      title: 'Grand Kalyana Mandapam Decor',
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2600&auto=format&fit=crop',
      aspectClass: 'aspect-tall',
      caption: 'Auspicious wedding stage illuminated with brass lamps and marigold garlands.'
    },
    {
      id: 2,
      title: 'Authentic Banana Leaf Feast',
      category: 'feasts',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=2600&auto=format&fit=crop',
      aspectClass: 'aspect-wide',
      caption: 'Traditional 24-item South Indian Elai Saapadu served with fresh cow ghee.'
    },
    {
      id: 3,
      title: 'Slow Simmered Brass Urli Culinary Craft',
      category: 'cooking',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2600&auto=format&fit=crop',
      aspectClass: 'aspect-square',
      caption: 'Heritage slow-cooking in pure brass vessels for deep flavour extraction.'
    },
    {
      id: 4,
      title: 'Steaming Podi Thatte Idli & Chutneys',
      category: 'live-counters',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2600&auto=format&fit=crop',
      aspectClass: 'aspect-square',
      caption: 'Live morning tiffin counter with gun powder idlis and fresh coconut chutney.'
    },
    {
      id: 5,
      title: 'Royal Pure Ghee Sweets Display',
      category: 'sweets',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2600&auto=format&fit=crop',
      aspectClass: 'aspect-tall',
      caption: 'Handcrafted Mysore Pak, Tirupati Laddus, and Kashi Halwa banquet spread.'
    },
    {
      id: 6,
      title: 'Joyous Family Reception Banquet',
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2600&auto=format&fit=crop',
      aspectClass: 'aspect-wide',
      caption: 'Cherished moments of family celebration and culinary contentment.'
    }
  ];

  filterCategory(cat: string): void {
    this.activeCategory = cat;
  }

  getFilteredItems(): GalleryItem[] {
    if (this.activeCategory === 'all') return this.items;
    return this.items.filter(item => item.category === this.activeCategory);
  }

  openLightbox(item: GalleryItem): void {
    this.selectedImage = item;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }
}
