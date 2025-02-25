export interface IUpdates {
    id: number;
    date: string;
    changes: IChanges[];
}

interface IChanges {
    chapterTitle?: string;
    added?: string[];
    updated?: string[];
    fixed?: string[];
    removed?: string[];
}
