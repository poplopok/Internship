import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class Header {
  currentMenu = input<string>('List0');
  selectedCount = input<number>(0);
  totalValue = input<number>(0);
}
