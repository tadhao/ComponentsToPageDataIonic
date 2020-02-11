import { NgModule } from '@angular/core';
import { ComponentBasicComponent } from './component-basic/component-basic';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [ComponentBasicComponent],
	imports: [ IonicModule],
	exports: [ComponentBasicComponent]
})
export class ComponentsModule {}
