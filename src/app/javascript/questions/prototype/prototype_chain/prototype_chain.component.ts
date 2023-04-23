import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-prototype-chain',
    templateUrl: './prototype_chain.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrototypeChainComponent {
    panelOpenState: boolean = false;
}
