import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from 'src/app/shared/interfaces';

import { SpoilersComponent } from '../../../shared/components/spoilers/spoilers.component';
import { TitleComponent } from '../../../shared/components/title/title.component';

import { allTypeScriptInfo } from '../../information/typescript';

@Component({
    selector: 'app-typescript',
    templateUrl: './typescript.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, SpoilersComponent],
})
export class TypescriptComponent {
    list: IList[] = [{ name: 'Все', path: 'typescript', info: allTypeScriptInfo }];
}
