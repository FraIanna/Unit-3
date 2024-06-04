import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group(
      {
        nome: this.fb.control(null, [Validators.required]),
        cognome: this.fb.control(null, [Validators.required]),
        password: this.fb.control(null, [Validators.required]),
        confermaPassword: this.fb.control(null, [Validators.required]),
        username: this.fb.control(null),
        foto: this.fb.control(null),
        biografia: this.fb.control(null),
      },
      {
        validator: this.passwordMatchValidator,
      }
    );
  }
  submit() {
    console.log(this.form.value);
  }

  isInvalidTouched(fieldName: string) {
    {
      const field = this.form.get(fieldName);
      return field?.invalid && (field?.touched || field?.dirty);
    }
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password');
    const confermaPassword = group.get('confermaPassword');
    return password?.value === confermaPassword?.value
      ? null
      : { passwordMatch: true };
  }
}
