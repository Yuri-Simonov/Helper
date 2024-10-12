import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [MatButtonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input({ alias: 'text', required: true }) textProps: string;
    @Input('disabled') disabledProps: boolean = false;
}
