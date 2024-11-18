import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { opacityAnimation } from 'src/app/shared/animations/opacity.animation';

import { ThemeToggleService } from './settings/services/theme-toggle.service';
import { BackgroundToggleService } from './settings/services/background-toggle.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [opacityAnimation],
})
export class AppComponent {
    constructor(
        private themeToggleService: ThemeToggleService,
        private backgroundToggleService: BackgroundToggleService,
    ) {}

    ngOnInit() {
        this.themeToggleService.setCurrentTheme();
        this.backgroundToggleService.setCurrentBackground();
    }

    getRouterOutletState(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
