import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { DemoListSectionComponent } from './list-section.component';
import { DemoListBasicComponent } from './basic/list-basic.component';
import { DemoListDropComponent } from './list-drop/list-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DemoListGridComponent } from './list-grid/list-grid.component';
import { DemoListSeniorComponent } from './list-senior/list-senior.component';
import { DemoListObjectValueComponent } from './list-object-value/list-object-value.component';

@NgModule({
    declarations: [
        DemoListSectionComponent,
        DemoListBasicComponent,
        DemoListDropComponent,
        DemoListGridComponent,
        DemoListSeniorComponent,
        DemoListObjectValueComponent
    ],
    entryComponents: [
        DemoListSectionComponent,
        DemoListBasicComponent,
        DemoListDropComponent,
        DemoListGridComponent,
        DemoListSeniorComponent,
        DemoListObjectValueComponent
    ],
    imports: [SharedModule, DragDropModule],
    exports: [DemoListSectionComponent]
})
export class DemoListModule {}
