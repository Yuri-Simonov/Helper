import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MaterialComponents = [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatRadioModule,
    MatProgressBarModule,
];

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents],
})
export class MaterialModule {}
