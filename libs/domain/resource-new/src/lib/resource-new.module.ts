import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResourceNewPage } from './resource-new.page';
import { ResourceNewForm } from './resource-new/resource-new.form';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [
    ResourceNewPage,
    ResourceNewForm
  ],
})
export class ResourceNewModule {}
