import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightJsDirective } from 'ngx-highlight-js';

import { SpoilersComponent } from './spoilers/spoilers.component';

import { Directives } from '../../directives/directive.module';
import { EmptyModule } from '../empty/empty.module';
import { MaterialModule } from '../material/material.module';
import { SidenavModule } from '../sidenav/sidenav.module';

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
@NgModule({
    declarations: [SpoilersComponent],
    imports: [CommonModule, Directives, EmptyModule, MaterialModule, SidenavModule, HighlightJsDirective],
    exports: [SpoilersComponent],
})
export class SpoilersModule {}
