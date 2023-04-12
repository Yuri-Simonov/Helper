import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
    @Input('title') titleProps: string;
    @Input('state') stateProps: boolean = false;
    @Input('visibleIcon') visibleIconProps: boolean = true;

    @Output() stateChange = new EventEmitter<boolean>();

    changeListState(): void {
        this.stateProps = !this.stateProps;
        this.stateChange.emit(this.stateProps);
    }
}
