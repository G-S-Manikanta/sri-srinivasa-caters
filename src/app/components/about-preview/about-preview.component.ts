import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-preview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-preview.component.html',
  styleUrls: ['./about-preview.component.scss']
})
export class AboutPreviewComponent {
  stats = [
    { value: '25+', label: 'Years of Culinary Mastery', subtext: 'Rooted in timeless Vedic recipes' },
    { value: '1,500+', label: 'Weddings & Celebrations', subtext: 'Grand feasts catered flawlessly' },
    { value: '100%', label: 'Pure Vegetarian Sanctity', subtext: 'Traditional cow ghee & natural spices' },
    { value: '50k+', label: 'Happy Families Blessed', subtext: 'Generations of trusted taste' }
  ];
}
