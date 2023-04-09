import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from 'src/app/shared/modules/title/components/title/title.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
    declarations: [TitleComponent],
    imports: [CommonModule, MaterialModule],
    exports: [TitleComponent],
})
export class TitleModule {}
