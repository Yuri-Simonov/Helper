import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from 'src/app/shared/modules/sidenav/components/sidenav/sidenav.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [SidenavComponent],
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [SidenavComponent],
})
export class SidenavModule {}
