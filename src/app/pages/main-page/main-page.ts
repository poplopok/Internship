import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Header } from '../../shared/ui/header/header';
import { data } from "../../shared/data/menu-data"
import { Sidebar } from "../../shared/ui/sidebar/sidebar/sidebar";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [Header, NgFor, Sidebar],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {
  pages = data.pages;
  currentPageIndex = 0;
  selectedValues: number[] = [];

  onPageSelected(index: number) {
  this.currentPageIndex = index;
  this.selectedValues = [];
  }

  get currentPage() {
    return this.pages[this.currentPageIndex];
  }

  get items() {
    return this.currentPage.items;
  }

  onToggle(value: number, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      this.selectedValues.push(value);
    } else {
      this.selectedValues = this.selectedValues.filter((v) => v !== value);
    }
  }

  get totalValue(): number {
    return this.selectedValues.reduce((sum, v) => sum + v, 0);
  }

}
