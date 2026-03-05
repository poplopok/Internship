import { Component, EventEmitter, Output } from '@angular/core';
import { data } from '../../../data/menu-data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [NgFor],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Output() pageSelected = new EventEmitter<number>();

  pages=data.pages;

  selectPage(index: number) {
    this.pageSelected.emit(index);  
  }
  
}
