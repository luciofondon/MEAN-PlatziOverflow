import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
<<<<<<< HEAD
  MatListModule,
  MatGridListModule,
  MatRadioModule
=======
  MatListModule
>>>>>>> 22e15e87c6557cec2b2492ad538e1f891a82fd73
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
<<<<<<< HEAD
  MatListModule,
  MatGridListModule,
  MatRadioModule
=======
  MatListModule
>>>>>>> 22e15e87c6557cec2b2492ad538e1f891a82fd73
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
