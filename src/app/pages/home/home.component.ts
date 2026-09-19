import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { VisualStoryComponent } from '../../components/visual-story/visual-story.component';
import { AboutPreviewComponent } from '../../components/about-preview/about-preview.component';
import { FoodExperienceComponent } from '../../components/food-experience/food-experience.component';
import { ServicesCardsComponent } from '../../components/services-cards/services-cards.component';
import { WeddingExperienceComponent } from '../../components/wedding-experience/wedding-experience.component';
import { BananaLeafExperienceComponent } from '../../components/banana-leaf-experience/banana-leaf-experience.component';
import { PopularMenuComponent } from '../../components/popular-menu/popular-menu.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { GalleryGridComponent } from '../../components/gallery-grid/gallery-grid.component';
import { TestimonialsSliderComponent } from '../../components/testimonials-slider/testimonials-slider.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    VisualStoryComponent,
    AboutPreviewComponent,
    FoodExperienceComponent,
    ServicesCardsComponent,
    WeddingExperienceComponent,
    BananaLeafExperienceComponent,
    PopularMenuComponent,
    WhyChooseUsComponent,
    GalleryGridComponent,
    TestimonialsSliderComponent,
    CtaSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
