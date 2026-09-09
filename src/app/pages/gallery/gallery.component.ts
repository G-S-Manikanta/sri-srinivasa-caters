import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  allImages: any[] = [];
  filteredImages: any[] = [];
  categories: string[] = ['all', 'wedding', 'corporate', 'birthday', 'buffet'];
  selectedCategory: string = 'all';

  selectedImage: string | null = null;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getGalleryData().subscribe(data => {
      this.allImages = data.images;
      this.filteredImages = data.images;
    });
  }

  filterImages(category: string): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredImages = this.allImages;
    } else {
      this.filteredImages = this.allImages.filter(image => image.category === category);
    }
  }

  openLightbox(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }

  closeLightbox(): void {
    this.selectedImage = null;
  }
}
