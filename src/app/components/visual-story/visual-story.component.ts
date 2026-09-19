import { Component, ElementRef, OnInit, OnDestroy, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface StoryChapter {
  id: string;
  step: string;
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  quoteAuthor: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

@Component({
  selector: 'app-visual-story',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './visual-story.component.html',
  styleUrls: ['./visual-story.component.scss']
})
export class VisualStoryComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('chapterItem') chapterElements!: QueryList<ElementRef<HTMLElement>>;

  activeChapterIndex = 0;
  private observer?: IntersectionObserver;

  chapters: StoryChapter[] = [
    {
      id: 'wedding',
      step: '01',
      kicker: 'The Sacred Kalyanam',
      title: 'The Grand Wedding Mandapam',
      subtitle: 'Where sacred vows meet divine hospitality.',
      description: 'A South Indian wedding is a sacred tapestry woven with heritage, family pride, and divine reverence. In a hall fragrant with fresh jasmine, marigold garlands, and the golden glow of brass kuthuvilakku lamps, our catering begins as an auspicious offering to your sacred union.',
      quote: 'An auspicious union honored with sacred culinary reverence.',
      quoteAuthor: 'The Muhurtham Promise',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2600&auto=format&fit=crop',
      imageAlt: 'Grand South Indian Wedding Mandapam Decor and Warm Lighting',
      tags: ['Mandapam Grandeur', 'Sacred Auspiciousness', 'Silk & Jasmine']
    },
    {
      id: 'tradition',
      step: '02',
      kicker: 'Generations of Heritage',
      title: 'Vedic Culinary Parampara',
      subtitle: 'Time-honored recipes slow-crafted with devotion.',
      description: 'Our culinary philosophy is rooted in age-old traditions passed down across generations. Using traditional heavy brass urlis, slow wood-fired simmering, hand-pounded spices, and pure churned cow ghee, we preserve authentic regional recipes without modern compromise.',
      quote: 'No shortcuts. Only the timeless sanctity of pure ingredients.',
      quoteAuthor: 'Heritage Kitchen Craft',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2600&auto=format&fit=crop',
      imageAlt: 'Traditional Indian Culinary Preparation with Brass Vessels and Spices',
      tags: ['Brass Urli Cooking', 'Pure Cow Ghee', 'Hand-ground Spices']
    },
    {
      id: 'food',
      step: '03',
      kicker: 'The Sacred Feast',
      title: 'A Symphony of Six Tastes',
      subtitle: 'Celebrating the legendary Shadruchulu & Aru Suvai.',
      description: 'From rich, aromatic sambar infused with handpicked shallots to fragrant tamarind pulihora, soothing ginger pachadi, and slow-cooked Elaneer Payasam, every dish is an homage to the sacred balance of sweet, sour, salty, bitter, pungent, and astringent.',
      quote: 'Food cooked with devotion nourishes not just the body, but the soul.',
      quoteAuthor: 'Culinary Philosophy',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2600&auto=format&fit=crop',
      imageAlt: 'Rich Traditional South Indian Vegetarian Feast Spread',
      tags: ['Pure Vegetarian', 'Shadruchulu Balance', 'Fresh Daily Harvest']
    },
    {
      id: 'serving',
      step: '04',
      kicker: 'Banana-Leaf Dining',
      title: 'The Sacred Banana Leaf Ritual',
      subtitle: 'Athithi Devo Bhava — honoring every guest with reverence.',
      description: 'The green plantain leaf is laid with exact sacred geometry: salt on the top left, followed by pickles, sweet pachadi, vegetable poriyal, and crisp appalams. Steaming sona masoori rice is crowned with yellow paruppu and a generous swirl of hot golden ghee, served with warm, attentive care.',
      quote: 'Serving with humility and unconditional warmth.',
      quoteAuthor: 'The Elai Saapadu Tradition',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=2600&auto=format&fit=crop',
      imageAlt: 'Authentic South Indian Traditional Meal Served on Fresh Green Banana Leaf',
      tags: ['Elai Saapadu', 'Traditional Servers', 'Steaming Ghee & Rice']
    },
    {
      id: 'celebration',
      step: '05',
      kicker: 'The Joy of Togetherness',
      title: 'Cherished Memories & Utsavam',
      subtitle: 'Smiles and contentment that linger for a lifetime.',
      description: 'The true fulfillment of our craft is witnessed in the contented smiles of your elders, the delighted compliments of guests, and the joyful camaraderie around the dining tables. Long after the wedding music subsides, the memory of an extraordinary feast remains.',
      quote: 'Creating festive milestones that your families will cherish forever.',
      quoteAuthor: 'Sri Srinivasa Legacy',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2600&auto=format&fit=crop',
      imageAlt: 'Joyous Wedding Celebration and Happy Family Gathering',
      tags: ['Guest Delight', 'Lifetime Memories', 'Grand Hospitality']
    }
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupScrollObserver();
  }

  private setupScrollObserver(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexAttr = entry.target.getAttribute('data-chapter-index');
          if (indexAttr !== null) {
            this.activeChapterIndex = parseInt(indexAttr, 10);
          }
        }
      });
    }, {
      threshold: 0.45,
      rootMargin: '-10% 0px -25% 0px'
    });

    this.chapterElements.forEach((el) => {
      this.observer?.observe(el.nativeElement);
    });
  }

  setActiveChapter(index: number): void {
    this.activeChapterIndex = index;
    const targetElement = this.chapterElements.toArray()[index]?.nativeElement;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

