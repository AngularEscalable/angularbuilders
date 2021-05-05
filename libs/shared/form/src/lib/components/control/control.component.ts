import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ab-form-control',
  templateUrl: './control.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlComponent {
  @Input() form!: FormGroup;
  @Input() formControlName = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  constructor() {}

  hasErrorToShow() {
    const control = this.form.controls[this.formControlName];
    return control.touched && control.invalid;
  }
  hasError() {
    const control = this.form.controls[this.formControlName];
    return control.invalid;
  }
  getErrorMessage() {
    const control = this.form.controls[this.formControlName];
    return JSON.stringify(control.errors);
  }
}
