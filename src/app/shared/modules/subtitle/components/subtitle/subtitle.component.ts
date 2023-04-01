import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-subtitle',
    templateUrl: './subtitle.component.html',
    styleUrls: ['./subtitle.component.scss'],
})
export class SubtitleComponent {
    @Input('subtitle') subtitleProps: string;
}
