import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Answer } from './answer.model';
import { Question } from '../question/question.model';
import { User } from '../auth/user.model';

@Component({
    selector: 'app-answer-form';
    templateUrl: './answer-form.component.html',
    styles:[`
        form {
            display: flex;
        }
    `]
})

export class AnswerFormComponent {
    @Input() question: Question; // Pregunta que se esta viendo, se le pasa de la vista

    onSubmit(form: NgForm){
        const answer = new Answer(
            form.value.description,
            this.question,
            new Date(),
            new User('Lucio', 'Fondon', null, null)
        );
        this.question.answers.unshift(answer);
        form.reset();
    }
}