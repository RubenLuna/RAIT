import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiveridePage } from './giveride';

@NgModule({
  declarations: [
    GiveridePage,
  ],
  imports: [
    IonicPageModule.forChild(GiveridePage),
  ],
})
export class GiveridePageModule {}
