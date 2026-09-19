import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface LeafCourseItem {
  id: number;
  position: string;
  name: string;
  regionalName: string;
  taste: string;
  significance: string;
  icon: string;
}

@Component({
  selector: 'app-banana-leaf-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banana-leaf-experience.component.html',
  styleUrls: ['./banana-leaf-experience.component.scss']
})
export class BananaLeafExperienceComponent {
  selectedItemIndex = 6; // Default active on Sona Masoori Rice & Ghee

  leafCourses: LeafCourseItem[] = [
    {
      id: 1,
      position: 'Top Left Corner',
      name: 'Pristine Sea Salt',
      regionalName: 'Kallu Uppu',
      taste: 'Salty (Lavana)',
      significance: 'Placed first as a symbol of hospitality, friendship, and unshakeable trust between host and guest.',
      icon: 'fas fa-gem'
    },
    {
      id: 2,
      position: 'Top Left',
      name: 'Spiced Mango Pickle',
      regionalName: 'Avakaya / Maangai Oorugai',
      taste: 'Pungent & Tangy (Katu & Amla)',
      significance: 'Hand-pickled mangoes in cold-pressed sesame oil and stone-ground mustard to awaken the palate.',
      icon: 'fas fa-pepper-hot'
    },
    {
      id: 3,
      position: 'Top Center-Left',
      name: 'Pineapple Sweet Pachadi',
      regionalName: 'Inippu Pachadi',
      taste: 'Sweet & Tangy (Madhura)',
      significance: 'Cooked with jaggery and mustard seeds, symbolizing that life is a harmonious blend of sweet and sour.',
      icon: 'fas fa-apple-alt'
    },
    {
      id: 4,
      position: 'Top Center',
      name: 'Seasonal Vegetable Poriyal',
      regionalName: 'Beans & Carrot Thoran / Vepudu',
      taste: 'Astringent & Earthy (Kashaya)',
      significance: 'Fresh tender vegetables sautéed with freshly grated coconut, curry leaves, and mustard tempering.',
      icon: 'fas fa-carrot'
    },
    {
      id: 5,
      position: 'Top Center-Right',
      name: 'Kerala Avial / Classic Kootu',
      regionalName: 'Mukkootu Avial',
      taste: 'Mild Creamy & Coconut Rich',
      significance: 'A medley of 7 traditional root vegetables simmered in cumin-coconut paste and pure coconut oil.',
      icon: 'fas fa-leaf'
    },
    {
      id: 6,
      position: 'Bottom Left',
      name: 'Crispy Medu Vadai',
      regionalName: 'Ulundu Vadai / Garelu',
      taste: 'Crispy, Savoury & Peppery',
      significance: 'Golden, crispy whole urad dal doughnut with cracked peppercorns and ginger, fried in pure groundnut oil.',
      icon: 'fas fa-circle-notch'
    },
    {
      id: 7,
      position: 'Center Bottom',
      name: 'Steaming Sona Masoori Rice & Cow Ghee',
      regionalName: 'Paruppu Nei Sadham',
      taste: 'Nourishing, Warm & Golden',
      significance: 'The sacred heart of the meal. Fluffy aged rice served with yellow moong dal and a generous ladle of melted pure cow ghee.',
      icon: 'fas fa-bowl-rice'
    },
    {
      id: 8,
      position: 'Center Ladled',
      name: 'Heritage Drumstick Sambar',
      regionalName: 'Murungakkai Sambar',
      taste: 'Rich, Aromatic & Soulful',
      significance: 'Simmered with toor dal, shallots, native drumsticks, and freshly roasted coriander-chili spice blend.',
      icon: 'fas fa-utensils'
    },
    {
      id: 9,
      position: 'Center Ladled',
      name: 'Cumin Pepper Tomato Rasam',
      regionalName: 'Mysore / Kollu Rasam',
      taste: 'Digestive, Peppery & Zesty',
      significance: 'Clarified digestive broth infused with crushed cumin, black pepper, garlic, and fresh coriander leaves.',
      icon: 'fas fa-mug-hot'
    },
    {
      id: 10,
      position: 'Bottom Right',
      name: 'Elaneer Payasam & Mysore Pak',
      regionalName: 'Tender Coconut Kheer',
      taste: 'Divine Sweetness (Madhura)',
      significance: 'Slow-condensed milk infused with tender coconut pulp and cardamom, served alongside melt-in-the-mouth ghee Mysore Pak.',
      icon: 'fas fa-ice-cream'
    },
    {
      id: 11,
      position: 'Bottom Placed',
      name: 'Crispy Urad Dal Appalam',
      regionalName: 'Pappadum / Vadam',
      taste: 'Crunchy Accent',
      significance: 'Hand-rolled sundried lentil crisps that provide the celebratory crunch to every rice morsel.',
      icon: 'fas fa-sun'
    },
    {
      id: 12,
      position: 'Concluding Course',
      name: 'Farm Curd & Ginger Buttermilk',
      regionalName: 'Thair Sadham & Majjiga',
      taste: 'Cooling, Soothing & Satvik',
      significance: 'Thick, unpasteurized buffalo curd served with pomegranate pearls and green chili tempered buttermilk to complete the feast.',
      icon: 'fas fa-glass-whiskey'
    }
  ];

  selectLeafItem(index: number): void {
    this.selectedItemIndex = index;
  }
}

