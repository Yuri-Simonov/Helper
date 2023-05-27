import { IQuestion } from './question.interface';

export interface IList {
    name: string;
    path: string;
    questions: IQuestion[];
}
