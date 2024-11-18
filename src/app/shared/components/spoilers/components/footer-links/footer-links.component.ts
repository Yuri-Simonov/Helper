import { Component, Input } from '@angular/core';
import { IFooterLinks } from '../../../../interfaces';

@Component({
    selector: 'app-footer-links',
    standalone: true,
    imports: [],
    templateUrl: './footer-links.component.html',
    styleUrl: './footer-links.component.scss',
})
export class FooterLinksComponent {
    @Input('links') linksProps?: IFooterLinks[];
    @Input('text') textProps?: string[];
}
