import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
    @Input('title') titleProps: string;
    @Input('sidebarState') sidebarStateProps: boolean = false;
    @Input('visibleIcon') visibleIconProps: boolean = true;

    @Output() sidebarStateChange = new EventEmitter<boolean>();

    changeSidebarState(): void {
        this.sidebarStateProps = !this.sidebarStateProps;
        this.sidebarStateChange.emit(this.sidebarStateProps);
    }
}
