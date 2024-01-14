export interface IChapter {
    id: string;
    title: string;
    links: IChapterLinkItem[];
}

interface IChapterLinkItem {
    name: string;
    path?: string;
    href?: string;
    disabled?: boolean;
}
