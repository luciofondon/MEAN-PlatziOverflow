import { Answer } from '../answer/answer.model';

export class Question {
<<<<<<< HEAD
  _id?: string;
=======
>>>>>>> 22e15e87c6557cec2b2492ad538e1f891a82fd73
  title: string;
  description: string;
  createdAt?: Date;
  icon?: string;
  answers: Answer[];

  constructor(title: string, description: string, createdAt?: Date, icon?: string){
<<<<<<< HEAD
    this._id= '1';
=======
>>>>>>> 22e15e87c6557cec2b2492ad538e1f891a82fd73
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.icon = icon;
    this.answers = [];
  }
}
