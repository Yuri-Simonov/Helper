export interface IChapter {
    id: string;
    title: string;
    links: IChapterLinkItem[];
}

interface IChapterLinkItem {
    name: string;
    route?: string;
    href?: string;
    disabled?: boolean;
}
