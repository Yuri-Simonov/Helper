import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-subtitle',
    templateUrl: './subtitle.component.html',
    styleUrls: ['./subtitle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class SubtitleComponent {
    @Input('subtitle') subtitleProps: string;
}
