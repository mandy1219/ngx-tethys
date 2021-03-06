import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyLabelComponent } from './label.component';
import { ThyIconModule } from '../icon';

@NgModule({
    declarations: [ThyLabelComponent],
    imports: [CommonModule, ThyIconModule],
    exports: [ThyLabelComponent]
})
export class ThyLabelModule {}
