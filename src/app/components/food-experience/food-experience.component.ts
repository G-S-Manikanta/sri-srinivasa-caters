import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-food-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './food-experience.component.html',
  styleUrls: ['./food-experience.component.scss']
})
export class FoodExperienceComponent {
  pillars = [
    {
      icon: 'fas fa-fire-alt',
      title: 'Wood-Fired Simmering',
      description: 'Slow-simmered in heavy brass vessels to extract deep aromas and unmatched authentic flavors.'
    },
    {
      icon: 'fas fa-mortar-pestle',
      title: 'Hand-Ground Spices',
      description: 'Freshly roasted spices ground on stone mills daily, preserving natural oils and rich taste.'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Pure Cow Ghee Sanctity',
      description: 'Golden churned cow ghee infused into every sweet, dal, and rice preparation.'
    },
    {
      icon: 'fas fa-seedling',
      title: 'Farm Fresh Harvest',
      description: 'Handpicked seasonal vegetables, fresh coconut, shallots, and curry leaves sourced daily.'
    }
  ];
}

