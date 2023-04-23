import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-prototype-chain-end',
    templateUrl: './prototype_chain_end.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrototypeChainEndComponent {
    panelOpenState: boolean = false;
}
