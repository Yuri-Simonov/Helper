export interface IQuestion {
    title: string;
    body: string;
    selected: boolean;
    lastUpdate?: string;
    disabled?: boolean;
    footerLinks?: IFooterLinks[];
}

interface IFooterLinks {
    title?: string;
    path: string;
}
