import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './runners-menu';

@Component({
  selector: 'runners',
  template: `
    <food-ordering-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </food-ordering-layout>
  `,
})
export class RunnersComponent implements OnInit {
  menu = MENU_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
