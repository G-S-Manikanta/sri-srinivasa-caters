import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AboutPreviewComponent } from '../../components/about-preview/about-preview.component';
import { ServicesCardsComponent } from '../../components/services-cards/services-cards.component';
import { PopularMenuComponent } from '../../components/popular-menu/popular-menu.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { TestimonialsSliderComponent } from '../../components/testimonials-slider/testimonials-slider.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { ContactPreviewComponent } from '../../components/contact-preview/contact-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    AboutPreviewComponent,
    ServicesCardsComponent,
    PopularMenuComponent,
    WhyChooseUsComponent,
    TestimonialsSliderComponent,
    CtaSectionComponent,
    ContactPreviewComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
