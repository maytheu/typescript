import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionssRoutingModule } from './collectionss-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { CollectionTableComponent } from './collection-table/collection-table.component';

@NgModule({
  declarations: [CollectionsHomeComponent, CollectionTableComponent],
  imports: [CommonModule, CollectionssRoutingModule, WidgetsModule],
})
export class CollectionssModule {}
