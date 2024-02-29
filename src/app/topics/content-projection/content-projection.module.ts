import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleSlotComponent } from './single-slot/single-slot.component';
import { MultiSlotComponent } from './multi-slot/multi-slot.component';

const components = [
  SingleSlotComponent,
  MultiSlotComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule],
})
export class ContentProjectionModule {}
