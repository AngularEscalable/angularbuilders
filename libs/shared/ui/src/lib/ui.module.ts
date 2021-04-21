import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { TrackDirective } from './directives/track.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { BoxTemplate } from './templates/box/box.template';
import { CardTemplate } from './templates/card/card.template';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    HeaderComponent,
    NotificationComponent,
    BoxTemplate,
    CardTemplate,
    TrackDirective,
    TruncatePipe,
  ],
  exports: [
    HeaderComponent,
    NotificationComponent,
    BoxTemplate,
    CardTemplate,
    TrackDirective,
    TruncatePipe,
  ],
})
export class UiModule {}
