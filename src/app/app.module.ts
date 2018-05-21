
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Material Angular
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module'
import 'hammerjs';

import { QuestionDetailComponent } from './question/question-detail.component';
import { AnswerFormComponent } from './answer/answer-form.component';
import { SigninScreenComponent } from './auth/signin-screen.component';
import { SignupScreenComponent } from './auth/signup-screen.component';
import { QuestionListComponent } from './question/question-list.component';
import { QuestionFormComponent } from './question/question-form.component';

import { MomentModule } from 'angular2-moment';

<<<<<<< HEAD
import { Routing } from './app.routing';

=======
>>>>>>> 22e15e87c6557cec2b2492ad538e1f891a82fd73
@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [ // Modulos
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    Routing
=======
    ReactiveFormsModule
>>>>>>> 22e15e87c6557cec2b2492ad538e1f891a82fd73
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
