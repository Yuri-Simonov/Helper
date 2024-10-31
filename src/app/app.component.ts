import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { opacityAnimation } from 'src/app/shared/animations/opacity.animation';
import { ThemeToggleService } from './shared/services/theme-toggle.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [opacityAnimation],
})
export class AppComponent {
    constructor(private themeToggleService: ThemeToggleService) {}

    ngOnInit() {
        this.themeToggleService.setCurrentTheme();
    }

    getRouterOutletState(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
