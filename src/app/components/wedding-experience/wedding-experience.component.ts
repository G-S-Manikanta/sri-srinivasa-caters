import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wedding-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wedding-experience.component.html',
  styleUrls: ['./wedding-experience.component.scss']
})
export class WeddingExperienceComponent {
  weddingHighlights = [
    {
      title: 'Auspicious Muhurtham Feasts',
      desc: 'Pristine morning and afternoon traditional banana-leaf dining executed with synchronized traditional servers.'
    },
    {
      title: 'Grand Evening Reception Buffets',
      desc: 'Multi-regional South Indian and Pan-Indian culinary spreads, live stations, chaat corners, and artisanal desserts.'
    },
    {
      title: 'Live Tiffin & Kaapi Counters',
      desc: 'Steaming Podi Thatte Idlis, paper dosas, Kuzhi Paniyaram, and authentic degree filter coffee brewed in pure brass davarahs.'
    },
    {
      title: 'End-to-End Banquet Management',
      desc: 'Complete dining hall styling, traditional plantain leaf setup, welcoming beverages, and spotless dining hygiene.'
    }
  ];
}

