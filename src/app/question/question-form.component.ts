import { Component } from '@angular/core';
import { Question } from './question.model';
<<<<<<< HEAD
import { NgForm } from './angular/forms';
import { icons } from './icons';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styles: [`
    i {
      font-size: 48px;
    }

    small {
      display: block;
    }
  
  `]
})

export class QuestionFormComponent {
  icons: Object[] = icons;

  // Ver version del icono de cada uno (hay varias versiones por icono)
  getIconVersion(icon: any){
    let version;
    if(icon.versions.font.includes('plain-wordmark')){
      version = 'plain-wordmark';
    }else{
      version = icon.versions.font[0];
    }
    return version;
  }

  onSumibit(form: NgForm){
    const q = new Question(
      form.value.title,
      form.value.desription,
      new Date(),
      form.calue.icon
    )
    console.log(q)
  }
=======

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html'
})

export class QuestionFormComponent {

>>>>>>> 22e15e87c6557cec2b2492ad538e1f891a82fd73
    
}
