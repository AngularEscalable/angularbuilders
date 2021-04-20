import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarWidget } from './navbar/navbar.widget';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarWidget, FooterComponent],
  exports: [NavbarWidget, FooterComponent],
})
export class LayoutModule {}
