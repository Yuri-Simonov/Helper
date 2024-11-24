import { Directive, HostListener, Input } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Directive({
    selector: '[appCloseSpoilers]',
})
export class CloseSpoilersDirective {
    @Input('appCloseSpoilers') spoilerProps: { spoiler: MatExpansionPanel; selected: boolean };

    @HostListener('document:keyup.escape') handleKeyUpEscape() {
        if (this.spoilerProps.selected) {
            this.spoilerProps.spoiler.close();
        }
    }
}
