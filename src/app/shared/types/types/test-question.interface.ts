export interface IQuestionsAndAnswer {
    question: string;
    answers: ITestAnswerOption[];
}

export interface ITestAnswerOption {
    text: string;
    right: boolean;
}
