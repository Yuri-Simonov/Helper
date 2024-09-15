import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { opacityAnimation } from 'src/app/shared/animations/opacity.animation';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [opacityAnimation],
})
export class AppComponent {
    getRouterOutletState(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
