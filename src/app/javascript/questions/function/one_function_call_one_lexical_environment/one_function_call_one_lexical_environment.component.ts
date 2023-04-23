import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-one-function-call-one-lexical-environment',
    templateUrl: './one_function_call_one_lexical_environment.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneFunctionCallOneLexicalEnvironmentComponent {
    panelOpenState: boolean = false;
}
