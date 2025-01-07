import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

import { NAVIGATION } from '../shared/data/navigation';

import { INavigation, LinkType } from '../shared/interfaces';
import { FooterComponent } from '../shared/components/footer/footer.component';

const materialModules = [MatButtonModule, MatMenuModule];

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FooterComponent, materialModules, NgClass, NgTemplateOutlet, RouterLink],
})
export class HomeComponent {
    chapters: INavigation[] = NAVIGATION;
    menuLinkType: LinkType = LinkType.MENU;
}
