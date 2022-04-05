import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionssRoutingModule } from './collectionss-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent
  ],
  imports: [
    CommonModule,
    CollectionssRoutingModule
  ], exports:[CollectionsHomeComponent]
})
export class CollectionssModule { }
