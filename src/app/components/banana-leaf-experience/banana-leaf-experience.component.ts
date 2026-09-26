import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface LeafCourseItem {
  id: number;
  number: string;
  position: string;
  gridX: number; // percentage X on leaf
  gridY: number; // percentage Y on leaf
  name: string;
  regionalName: string;
  taste: string;
  significance: string;
  icon: string;
  image: string;
}

@Component({
  selector: 'app-banana-leaf-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banana-leaf-experience.component.html',
  styleUrls: ['./banana-leaf-experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BananaLeafExperienceComponent {
  readonly selectedItemIndex = signal(6); // Default on Rice & Pure Cow Ghee

  readonly leafCourses: LeafCourseItem[] = [
    {
      id: 1,
      number: '01',
      position: 'Top Left Tip',
      gridX: 12,
      gridY: 22,
      name: 'Pristine Sea Salt',
      regionalName: 'Kallu Uppu',
      taste: 'Salty (Lavana)',
      significance: 'Placed first as a sacred symbol of hospitality, loyalty, and lifelong trust between the host family and guest.',
      icon: 'fas fa-gem',
      image: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?q=80&w=2600&auto=format&fit=crop'
    },
    {
      id: 2,
      number: '02',
      position: 'Top Upper Left',
      gridX: 24,
      gridY: 18,
      name: 'Spiced Mango Pickle',
      regionalName: 'Avakaya / Maangai Oorugai',
      taste: 'Pungent & Tangy (Katu & Amla)',
      significance: 'Steeped in cold-pressed sesame oil and stone-ground mustard to stimulate salivary enzymes and awaken digestion.',
      icon: 'fas fa-pepper-hot',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2600&auto=format&fit=crop'
    },
    {
      id: 3,
      number: '03',
      position: 'Top Left Center',
      gridX: 38,
      gridY: 16,
      name: 'Pineapple Sweet Pachadi',
      regionalName: 'Inippu Pachadi',
      taste: 'Sweet & Tangy (Madhura & Amla)',
      significance: 'Simmered with country jaggery and tempered mustard seeds, symbolizing the philosophy that life is a harmonious mix of sweet and sour.',
      icon: 'fas fa-apple-whole',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2600&auto=format&fit=crop'
    },
    {
      id: 4,
      number: '04',
      position: 'Top Center',
      gridX: 52,
      gridY: 15,
      name: 'Seasonal Vegetable Poriyal',
      regionalName: 'Beans & Carrot Thoran / Vepudu',
      taste: 'Astringent & Earthy (Kashaya)',
      significance: 'Crisp hand-cut garden vegetables sautéed with fresh grated coconut, curry leaves, and cumin.',
      icon: 'fas fa-carrot',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2600&auto=format&fit=crop'
    },
    {
      id: 5,
      number: '05',
      position: 'Top Right Center',
      gridX: 68,
      gridY: 16,
      name: 'Kerala Avial / Classic Kootu',
      regionalName: 'Mukkootu Avial',
      taste: 'Creamy Coconut Rich',
      significance: 'A sacred medley of 7 traditional country vegetables simmered in cumin-coconut paste and pure coconut oil.',
      icon: 'fas fa-leaf',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=2600&auto=format&fit=crop'
    },
    {
      id: 6,
      number: '06',
      position: 'Bottom Left',
      gridX: 18,
      gridY: 72,
      name: 'Crispy Medu Vadai',
      regionalName: 'Ulundu Vadai / Garelu',
      taste: 'Crispy & Peppery Savoury',
      significance: 'Golden whole urad dal fritters with cracked black peppercorns and fresh ginger, fried in pure groundnut oil.',
      icon: 'fas fa-circle-notch',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2600&auto=format&fit=crop'
    },
    {
      id: 7,
      number: '07',
      position: 'Sacred Heart (Center Bottom)',
      gridX: 45,
      gridY: 65,
      name: 'Steaming Rice & Pure Cow Ghee',
      regionalName: 'Paruppu Nei Sadham',
      taste: 'Nourishing & Golden Comfort',
      significance: 'The sacred foundation of the meal. Fluffy aged Sona Masoori rice served with yellow moong dal and a steaming ladle of pure melted cow ghee.',
      icon: 'fas fa-bowl-rice',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=2600&auto=format&fit=crop'
    },
    {
      id: 8,
      number: '08',
      position: 'Center Ladled',
      gridX: 52,
      gridY: 55,
      name: 'Heritage Drumstick Sambar',
      regionalName: 'Murungakkai Sambar',
      taste: 'Rich, Aromatic & Soulful',
      significance: 'Slow simmered with native drumsticks, Madras shallots, toor dal, and freshly roasted stone-ground spice mix.',
      icon: 'fas fa-utensils',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2600&auto=format&fit=crop'
    },
    {
      id: 9,
      number: '09',
      position: 'Secondary Ladle',
      gridX: 62,
      gridY: 58,
      name: 'Cumin Pepper Tomato Rasam',
      regionalName: 'Mysore Rasam',
      taste: 'Digestive, Zesty & Peppery',
      significance: 'Clarified digestive elixir infused with heirloom tomatoes, crushed black pepper, toasted cumin seeds, and fresh coriander.',
      icon: 'fas fa-mug-hot',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2600&auto=format&fit=crop'
    },
    {
      id: 10,
      number: '10',
      position: 'Bottom Right',
      gridX: 82,
      gridY: 68,
      name: 'Elaneer Payasam & Mysore Pak',
      regionalName: 'Tender Coconut Kheer',
      taste: 'Divine Sweetness (Madhura)',
      significance: 'Chilled condensed milk infused with tender coconut pulp and cardamom, served alongside melt-in-mouth golden ghee Mysore Pak.',
      icon: 'fas fa-ice-cream',
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2600&auto=format&fit=crop'
    },
    {
      id: 11,
      number: '11',
      position: 'Left Lower Edge',
      gridX: 28,
      gridY: 82,
      name: 'Crispy Urad Dal Appalam',
      regionalName: 'Pappadum / Vadam',
      taste: 'Crunchy Accent',
      significance: 'Hand-rolled sun-dried lentil crisps that provide the celebratory crunch to every rice morsel.',
      icon: 'fas fa-sun',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2600&auto=format&fit=crop'
    },
    {
      id: 12,
      number: '12',
      position: 'Concluding Course',
      gridX: 74,
      gridY: 82,
      name: 'Farm Curd & Spiced Buttermilk',
      regionalName: 'Thair Sadham & Majjiga',
      taste: 'Cooling, Soothing & Satvik',
      significance: 'Thick farm buffalo curd served with pomegranate pearls, concluding the sacred feast with calming digestive harmony.',
      icon: 'fas fa-glass-water',
      image: 'https://images.unsplash.com/photo-1551893309-c4a45a3536df?q=80&w=2600&auto=format&fit=crop'
    }
  ];

  selectItem(index: number): void {
    this.selectedItemIndex.set(index);
  }
}
