export interface IUpdates {
    id: number;
    title: string;
    changes: IChanges[];
}

export interface IChanges {
    chapterTitle?: string;
    added?: string[];
    updated?: string[];
    fixed?: string[];
    removed?: string[];
}
