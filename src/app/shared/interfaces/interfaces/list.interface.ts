import { IInfo } from './info.interface';

export interface IList {
    name?: string;
    path?: string;
    info?: IInfo[];
    disabled?: boolean;
    chapter?: string;
}
