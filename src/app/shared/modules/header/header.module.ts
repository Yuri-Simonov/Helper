import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
