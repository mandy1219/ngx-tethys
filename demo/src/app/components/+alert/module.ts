import { NgModule } from '@angular/core';
import { DemoAlertSectionComponent } from './alert-section.component';
import { DemoAlertBasicComponent } from './basic/basic.component';
import { DemoAlertIconComponent } from './icon/icon.component';
import { DemoAlertWeakComponent } from './weak/weak.component';
import { DemoAlertCloseComponent } from './close/close.component';
import { SharedModule } from 'app/shared.module';

const components = [
    DemoAlertSectionComponent,
    DemoAlertBasicComponent,
    DemoAlertIconComponent,
    DemoAlertWeakComponent,
    DemoAlertCloseComponent
];

@NgModule({
    imports: [SharedModule],
    declarations: [...components],
    entryComponents: [...components]
})
export class DemoAlertModule {}
