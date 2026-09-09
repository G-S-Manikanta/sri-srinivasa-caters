import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCategoriesComponent } from '../../components/menu-categories/menu-categories.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MenuCategoriesComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

}
