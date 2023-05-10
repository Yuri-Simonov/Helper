import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'app-custom-control',
    templateUrl: './custom_control.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomControlComponent implements ControlValueAccessor {
    writeValue(obj: any): void {
        throw new Error('Method not implemented.');
    }
    registerOnChange(fn: any): void {
        throw new Error('Method not implemented.');
    }
    registerOnTouched(fn: any): void {
        throw new Error('Method not implemented.');
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error('Method not implemented.');
    }
    panelOpenState: boolean = false;
}
