import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'about', component: AboutUsComponent, title: 'About Us' },
    { path: 'services', component: ServicesComponent, title: 'Services' },
    { path: 'menu', component: MenuComponent, title: 'Menu' },
    { path: 'gallery', component: GalleryComponent, title: 'Gallery' },
    { path: 'testimonials', component: TestimonialsComponent, title: 'Testimonials' },
    { path: 'contact', component: ContactUsComponent, title: 'Contact Us' },
];
