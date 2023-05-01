import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-subject-varieties',
    templateUrl: './subject_varieties.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectVarietiesComponent {
    panelOpenState: boolean = false;
}
