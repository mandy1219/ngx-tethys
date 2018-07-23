import {
    Directive, Output, HostListener,
    EventEmitter, OnInit, NgZone,
    ElementRef, Renderer2, ChangeDetectorRef
} from '@angular/core';
import { keycodes } from '../util';

/**
 * 与 (keydown.enter) 区别是支持组合键，当按 Ctrl + Enter 或者 Command + Enter 也会触发
 */
@Directive({
    selector: '[thyEnter]'
})
export class ThyEnterDirective implements OnInit {

    @Output() thyEnter = new EventEmitter();

    onKeydown(event: KeyboardEvent) {
        const keyCode = event.which || event.keyCode;
        if (keyCode === keycodes.ENTER) {
            event.preventDefault();
            this.thyEnter.emit(event);
            this.changeDetectorRef.detectChanges();
        }
    }

    constructor(
        private ngZone: NgZone,
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.ngZone.runOutsideAngular(() => {
            this.renderer.listen(this.elementRef.nativeElement, 'keydown', this.onKeydown.bind(this));
        });
    }
}
