import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarWidget } from './navbar/navbar.widget';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavbarWidget
  ],
  exports: [
    NavbarWidget
  ],
})
export class LayoutModule {}
