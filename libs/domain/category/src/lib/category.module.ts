import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryPage } from './category.page';
import { ResourceListComponent } from './resource-list/resource-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [
    CategoryPage,
    ResourceListComponent
  ],
})
export class CategoryModule {}
