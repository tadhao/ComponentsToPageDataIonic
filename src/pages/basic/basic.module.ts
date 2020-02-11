import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicPage } from './basic';
import { ComponentBasicComponent } from '../../components/component-basic/component-basic';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BasicPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicPage),
    ComponentsModule
  ],
})
export class BasicPageModule {}
