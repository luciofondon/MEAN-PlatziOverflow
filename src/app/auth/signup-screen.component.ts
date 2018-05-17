import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';


@Component({
    selector: 'app-signup-screen',
    templateUrl: './signin-signup.component.html' 
})

export class SignupScreenComponent implements OnInit {
    singupForm: FormGroup;
    ngOnInit() {
        this.singupForm = new FormGroup({
          firstName: new FormControl(null, Validators.required),
          lastName: new FormControl(null, Validators.required),
          email: new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
          ]),
          password: new FormControl(null, Validators.required),
          password2: new FormControl(null, Validators.required)
        });
      }
    
    onSubmit() {
        const { firstName, lastName, email, password, password2 } = this.singupForm.value;
        if (this.singupForm.valid && password === password2) {
          const user = new User(email, password, firstName, lastName);
          console.log(user);
        }
    }
}