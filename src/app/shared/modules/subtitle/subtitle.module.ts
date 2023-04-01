import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubtitleComponent } from 'src/app/shared/modules/subtitle/components/subtitle/subtitle.component';

@NgModule({
    declarations: [SubtitleComponent],
    imports: [CommonModule],
    exports: [SubtitleComponent],
})
export class SubtitleModule {}
