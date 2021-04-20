import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BoxTemplate } from './templates/box/box.template';
import { CardTemplate } from './templates/card/card.template';
import { TrackDirective } from './directives/track.directive';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    NotificationComponent,
    BoxTemplate,
    CardTemplate,
    TrackDirective,
    TruncatePipe
  ],
  exports: [
    HeaderComponent,
    NotificationComponent,
    BoxTemplate,
    CardTemplate,
    TrackDirective,
    TruncatePipe
  ],
})
export class UiModule {}
