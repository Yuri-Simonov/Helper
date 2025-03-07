import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [MatToolbarModule];

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [materialModules]
})
export class FooterComponent {
    currentYear: number;

    constructor() {
        this.currentYear = new Date().getFullYear();
    }
}
