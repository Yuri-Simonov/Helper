import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[appNextQuestion]',
    standalone: false
})
export class NextQuestionDirective {
    @Output() nextQuestion = new EventEmitter<void>();

    @HostListener('document:keyup.enter') handleKeyup() {
        this.nextQuestion.emit();
    }
}
