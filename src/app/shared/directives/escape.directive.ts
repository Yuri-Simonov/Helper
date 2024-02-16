import { Directive, HostListener, Input } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Directive({
    selector: '[appEscape]',
    standalone: true,
})
export class EscapeDirective {
    @Input('appEscape') questionsProps: MatAccordion[];

    constructor() {}

    @HostListener('keyup.escape') enterMouseEvent() {
        this.questionsProps.forEach((acc) => acc.closeAll());
    }
}
