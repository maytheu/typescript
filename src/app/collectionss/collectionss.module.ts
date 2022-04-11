import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionssRoutingModule } from './collectionss-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { CollectionTableComponent } from './collection-table/collection-table.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnerComponent } from './partner/partner.component';

@NgModule({
  declarations: [CollectionsHomeComponent, CollectionTableComponent, BiographyComponent, CompaniesComponent, PartnerComponent],
  imports: [CommonModule, CollectionssRoutingModule, WidgetsModule],
})
export class CollectionssModule {}
