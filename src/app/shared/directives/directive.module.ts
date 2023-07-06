import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscapeDirective } from './directives/escape.directive';

@NgModule({
    declarations: [EscapeDirective],
    imports: [CommonModule],
    exports: [EscapeDirective],
})
export class Directives {}
