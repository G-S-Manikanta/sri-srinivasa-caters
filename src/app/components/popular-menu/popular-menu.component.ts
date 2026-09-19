import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuCategoryItem {
  id: string;
  name: string;
  icon: string;
  items: {
    name: string;
    description: string;
    isSignature?: boolean;
    tag?: string;
  }[];
}

@Component({
  selector: 'app-popular-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './popular-menu.component.html',
  styleUrls: ['./popular-menu.component.scss']
})
export class PopularMenuComponent {
  activeCategory = 'breakfast';

  categories: MenuCategoryItem[] = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      icon: 'fas fa-sun',
      items: [
        { name: 'Ghee Podi Thatte Idli', description: 'Soft steamed rice cakes bathed in spicy gun powder and melted cow ghee.', isSignature: true, tag: 'Signature' },
        { name: 'Crispy Medu Vadai', description: 'Golden, crispy whole urad dal fritters with cracked black pepper and fresh coconut chutney.' },
        { name: 'Ghee Roast Paper Dosa', description: 'Golden wafer-thin fermented crepes roasted in pure golden ghee with potato masala.' },
        { name: 'Rava Kichadi & Sambar', description: 'Semolina cooked with garden vegetables, cashews, and aromatic spices.' }
      ]
    },
    {
      id: 'traditional-meals',
      name: 'Traditional Meals',
      icon: 'fas fa-leaf',
      items: [
        { name: 'Royal Kalyana Virundhu (24 Items)', description: 'Grand wedding banquet featuring 3 sweets, 4 savouries, 5 curries, rice, sambar, rasam, and payasam.', isSignature: true, tag: 'Royal Wedding' },
        { name: 'Aru Suvai Bhojanam (18 Items)', description: 'Traditional South Indian festive meal balancing all six ayurvedic tastes on banana leaf.' },
        { name: 'Satvik Puja Prasada Bhojanam', description: 'Pure temple-style meal prepared without onion and garlic according to Vedic sanctity.' }
      ]
    },
    {
      id: 'rice-varieties',
      name: 'Rice Varieties',
      icon: 'fas fa-bowl-rice',
      items: [
        { name: 'Koil Pulihora (Tamarind Rice)', description: 'Temple-style tangy tamarind rice tempered with roasted peanuts, curry leaves, and mustard.', isSignature: true, tag: 'Must Try' },
        { name: 'Bisibelebath with Ghee Boondi', description: 'Karnataka classic rice and lentil mash slow-cooked with fresh vegetables and aromatic spice blend.' },
        { name: 'Elumichai Sadham (Lemon Rice)', description: 'Zesty turmeric and lemon infused rice with crunchy lentils and ginger.' },
        { name: 'Thengai Sadham (Coconut Rice)', description: 'Fragrant basmati rice tossed with fresh grated coconut, cashews, and green chilies.' }
      ]
    },
    {
      id: 'curries',
      name: 'Curries',
      icon: 'fas fa-utensils',
      items: [
        { name: 'Ennai Kathirikai Kulambu', description: 'Stuffed tender baby brinjals simmered in a rich, tangy tamarind and roasted sesame gravy.', isSignature: true, tag: 'Chef Special' },
        { name: 'Urundai Kulambu', description: 'Spiced lentil dumplings gently simmered in a fragrant, tangy tomato-shallot curry.' },
        { name: 'Gutti Vankaya Koora', description: 'Traditional Andhra style stuffed eggplant curry rich in groundnut and roasted coriander paste.' },
        { name: 'Paneer Butter Masala (South Style)', description: 'Fresh paneer cubes in a spiced cashew-tomato reduction with a South Indian touch.' }
      ]
    },
    {
      id: 'sambar-rasam',
      name: 'Sambar & Rasam',
      icon: 'fas fa-mug-hot',
      items: [
        { name: 'Kalyana Murungakkai Sambar', description: 'Traditional wedding sambar infused with small shallots, native drumsticks, and freshly ground masala.', isSignature: true, tag: 'Heritage' },
        { name: 'Mysore Tomato Rasam', description: 'Clarified digestive broth infused with heirloom tomatoes, cumin, crushed pepper, and ghee.' },
        { name: 'Pineapple Pepper Rasam', description: 'Tantalizing sweet and spicy rasam brewed with fresh pineapple chunks and black pepper.' },
        { name: 'Mor Kulambu (Ash Gourd Buttermilk Curry)', description: 'Cooling yogurt gravy simmered with ash gourd and tempered with cumin and curry leaves.' }
      ]
    },
    {
      id: 'side-dishes',
      name: 'Side Dishes',
      icon: 'fas fa-carrot',
      items: [
        { name: 'Kerala Malabar Avial', description: 'Garden root vegetables slow-simmered in cumin-coconut paste and pure cold-pressed coconut oil.', isSignature: true, tag: 'Popular' },
        { name: 'Chow Chow Kootu', description: 'Chayote squash and chana dal simmered with freshly grated coconut and mild spices.' },
        { name: 'Seppankizhangu Varuval (Taro Roast)', description: 'Crisp, spicy roasted taro root seasoned with red chili and curry leaves.' },
        { name: 'Vazhaipoo Vadai (Banana Blossom Fritters)', description: 'Delicate, crunchy fritters made from freshly cleaned banana blossoms and lentils.' }
      ]
    },
    {
      id: 'sweets',
      name: 'Sweets',
      icon: 'fas fa-ice-cream',
      items: [
        { name: 'Royal Pure Ghee Mysore Pak', description: 'Melt-in-your-mouth gram flour fudge slow-crafted with 100% pure cow ghee.', isSignature: true, tag: 'Bestseller' },
        { name: 'Elaneer Payasam (Tender Coconut Kheer)', description: 'Chilled condensed milk pudding delicately infused with fresh tender coconut pulp and cardamom.', isSignature: true, tag: 'Signature' },
        { name: 'Tirupati Style Boondi Laddu', description: 'Golden gram flour pearls soaked in saffron sugar syrup with cashews and golden raisins.' },
        { name: 'Kashi Halwa (Ash Gourd Sweet)', description: 'Rich, translucent ash gourd halwa cooked with ghee, sugar, and toasted cashews.' }
      ]
    },
    {
      id: 'snacks',
      name: 'Snacks',
      icon: 'fas fa-cookie',
      items: [
        { name: 'Handmade Butter Murukku', description: 'Crispy, melt-in-mouth spiral savouries seasoned with butter, cumin, and hing.', isSignature: true, tag: 'Handcrafted' },
        { name: 'Madras Mixture', description: 'Celebratory festive mix of sev, boondi, roasted peanuts, and fried curry leaves.' },
        { name: 'Ribbon Pakoda', description: 'Crunchy golden ribbons seasoned with red chili powder and carom seeds.' },
        { name: 'Kara Boondi', description: 'Crisp fried gram pearls tossed with cashews, garlic, and fresh curry leaves.' }
      ]
    },
    {
      id: 'pickles-powders',
      name: 'Pickles & Powders',
      icon: 'fas fa-mortar-pestle',
      items: [
        { name: 'Authentic Andhra Avakaya', description: 'Traditional cut raw mango pickle steeped in cold-pressed sesame oil and mustard powder.', isSignature: true, tag: 'Heritage' },
        { name: 'Gongura Pachadi', description: 'Legendary Andhra sorrel leaf chutney sautéed with red chilies and garlic.' },
        { name: 'Kandi Podi (Gunpowder)', description: 'Roasted roasted toor dal and red chili powder best enjoyed with hot rice and ghee.' },
        { name: 'Inji Puli (Ginger Tamarind Chutney)', description: 'Kerala digestive pickle of sweet and sour dark jaggery, fresh ginger, and green chilies.' }
      ]
    },
    {
      id: 'beverages',
      name: 'Beverages',
      icon: 'fas fa-coffee',
      items: [
        { name: 'Traditional Brass Davarah Filter Coffee', description: 'Freshly roasted chicory blend decoction frothed with whole milk in traditional brass sets.', isSignature: true, tag: 'Iconic' },
        { name: 'Spiced Buttermilk (Neer Mor / Majjiga)', description: 'Churned cooling yogurt drink infused with crushed ginger, green chilies, and coriander.', isSignature: true, tag: 'Refreshing' },
        { name: 'Sukku Kaapi (Dry Ginger Herbal Brew)', description: 'Aromatic wellness drink brewed with dry ginger, black pepper, coriander seeds, and jaggery.' },
        { name: 'Nannari Sharbath', description: 'Natural sarsaparilla root cooler flavored with fresh lime juice and chilled water.' }
      ]
    }
  ];

  selectCategory(id: string): void {
    this.activeCategory = id;
  }

  getActiveCategory(): MenuCategoryItem {
    return this.categories.find(c => c.id === this.activeCategory) || this.categories[0];
  }
}
