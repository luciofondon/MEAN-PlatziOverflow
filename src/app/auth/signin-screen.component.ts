import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';


@Component({
    selector: 'app-signin-screen',
    templateUrl: './signin-screen.component.html'  // template: 'Hola estas en el sigin'
})

export class SigninScreenComponent implements OnInit {
    siginForm: FormGroup;
    ngOnInit(){
        this.siginForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required, 
                Validators.pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
    
    onSubmit() {
        if (this.siginForm.valid) {
            const {email, password} = this.siginForm.value;
            const user = new User(email, password);
            console.log(user)
        }
    }
}