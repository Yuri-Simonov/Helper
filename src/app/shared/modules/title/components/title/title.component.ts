import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
    listState: boolean = false;

    @Input('title') titleProps: string;
    @Output() newListState = new EventEmitter<boolean>();

    changeListState(): void {
        this.listState = !this.listState;
        this.newListState.emit(this.listState);
    }
}
