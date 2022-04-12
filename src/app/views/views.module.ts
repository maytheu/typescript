import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatusticsComponent } from './statustics/statustics.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    ViewsHomeComponent,
    StatusticsComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule, WidgetsModule
  ]
})
export class ViewsModule { }
