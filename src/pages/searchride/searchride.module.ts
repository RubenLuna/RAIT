import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchridePage } from './searchride';

@NgModule({
  declarations: [
    SearchridePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchridePage),
  ],
})
export class SearchridePageModule {}
