import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [FooterComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [FooterComponent],
})
export class FooterModule {}
