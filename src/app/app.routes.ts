import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Sri Srinivasa Caters' },
    { path: 'about', component: AboutUsComponent, title: 'Sri Srinivasa Caters' },
    { path: 'services', component: ServicesComponent, title: 'Sri Srinivasa Caters' },
    { path: 'menu', component: MenuComponent, title: 'Sri Srinivasa Caters' },
    { path: 'gallery', component: GalleryComponent, title: 'Sri Srinivasa Caters' },
    { path: 'testimonials', component: TestimonialsComponent, title: 'Sri Srinivasa Caters' },
    { path: 'contact', component: ContactUsComponent, title: 'Sri Srinivasa Caters' },
];
