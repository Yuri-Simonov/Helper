export interface IInfosAndAnswer {
    question: string;
    answers: ITestAnswerOption[];
}

export interface ITestAnswerOption {
    text: string;
    right: boolean;
}
