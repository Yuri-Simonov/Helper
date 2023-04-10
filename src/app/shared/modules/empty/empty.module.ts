import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyComponent } from 'src/app/shared/modules/empty/components/empty/empty.component';

@NgModule({
    declarations: [EmptyComponent],
    imports: [CommonModule],
    exports: [EmptyComponent],
})
export class EmptyModule {}
