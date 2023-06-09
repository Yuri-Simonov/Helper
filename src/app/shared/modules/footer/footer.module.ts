import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
    declarations: [FooterComponent],
    imports: [CommonModule, MaterialModule],
    exports: [FooterComponent],
})
export class FooterModule {}
