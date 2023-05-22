import { IQuestion } from 'src/app/shared/types/question.interface';

export interface IList {
    name: string;
    path: string;
    questions: IQuestion[];
}
