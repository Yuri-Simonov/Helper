import { Directive, HostListener, Input } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Directive({
    selector: '[appEscape]',
    standalone: true,
})
export class EscapeDirective {
    @Input('appEscape') questionsProps: MatAccordion[];

    @HostListener('document:keyup.escape') handleKeyUpEscape() {
        this.questionsProps.forEach((acc) => acc.closeAll());
    }
}
