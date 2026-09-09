import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu-categories',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.scss']
})
export class MenuCategoriesComponent implements OnInit {
  menuData: any;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenuData().subscribe(data => {
      this.menuData = data;
    });
  }
}
