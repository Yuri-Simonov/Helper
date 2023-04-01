import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from 'src/app/shared/modules/title/components/title/title.component';

@NgModule({
    declarations: [TitleComponent],
    imports: [CommonModule],
    exports: [TitleComponent],
})
export class TitleModule {}
