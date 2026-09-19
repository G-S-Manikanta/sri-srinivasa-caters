import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from '../../services/gallery.service';

interface GalleryImg {
  id: number;
  src: string;
  category: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  allImages: GalleryImg[] = [];
  filteredImages: GalleryImg[] = [];
  categories: string[] = ['all', 'wedding', 'feasts', 'cooking', 'live-counters', 'sweets', 'corporate'];
  selectedCategory: string = 'all';
  selectedImage: string | null = null;
  selectedAlt: string = '';

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getGalleryData().subscribe({
      next: (data) => {
        const items = Array.isArray(data) ? data : (data?.images || []);
        this.allImages = items;
        this.filteredImages = items;
      },
      error: () => {
        this.allImages = [];
        this.filteredImages = [];
      }
    });
  }

  filterImages(category: string): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredImages = this.allImages;
    } else {
      this.filteredImages = this.allImages.filter(image => image.category.toLowerCase() === category.toLowerCase());
    }
  }

  openLightbox(imageSrc: string, alt: string): void {
    this.selectedImage = imageSrc;
    this.selectedAlt = alt;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedImage = null;
    this.selectedAlt = '';
    document.body.style.overflow = 'auto';
  }
}
