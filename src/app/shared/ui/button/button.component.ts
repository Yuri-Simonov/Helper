import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input({ alias: 'text', required: true }) textProps: string;
    @Input('disabled') disabledProps: boolean = false;
}
