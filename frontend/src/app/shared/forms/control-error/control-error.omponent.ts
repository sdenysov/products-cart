import {ErrorService} from '@@core/services/error.service';
import {ValidationError} from '@@shared/models/validation-error';
import {FormUtils} from '@@shared/utils/form.utils';
import {Component, OnInit} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {AbstractControl} from '@angular/forms/src/model';

@Component({
  selector: 'app-control-error',
  templateUrl: 'control-error.component.html',
})
export class ControlErrorComponent implements ControlValueAccessor, OnInit {

  public control: AbstractControl;

  constructor(private ngControl: NgControl,
              private errorService: ErrorService) {
    ngControl.valueAccessor = this;
  }

  get errorMessage(): string {
    const error: ValidationError = FormUtils.getFirstError(this.control);
    return this.errorService.getErrorMessage(error);
  }

  ngOnInit() {
    this.control = this.ngControl.control;
  }

  registerOnChange(fn: any): void {
    /* NOOP */
  }

  registerOnTouched(fn: any): void {
    /* NOOP */
  }

  writeValue(obj: any): void {
    /* NOOP */
  }
}
