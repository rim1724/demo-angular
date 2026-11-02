import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-reactiveform',
  styleUrl: './reactiveform.css',
  templateUrl: './reactiveform.html',
})
export class Reactiveform {
  userForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
      ],
    }),
  });

  submittedName = '';

  submitForm(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.submittedName = '';
      return;
    }

    this.submittedName = this.userForm.controls.name.value;
  }
}
