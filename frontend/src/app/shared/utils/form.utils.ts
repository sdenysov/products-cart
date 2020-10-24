import {ValidationError} from '@@shared/models/validation-error';
import {CollectionUtils} from '@@shared/utils/collection.utils';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';

export class FormUtils {

  static getFirstError(control: AbstractControl): ValidationError {
    const errorsProperties = Object.keys(control.errors);
    const errorKey = CollectionUtils.getFirstItem(errorsProperties);
    return {
      type: errorKey,
      params: control.errors[errorKey]
    };
  }

  static markAllAsTouched(form: FormGroup | FormArray): void {
    form.markAsTouched();
    const controls = form instanceof FormGroup ? Object.values(form.controls) : form.controls;
    controls.forEach(ctrl => {
      if (ctrl instanceof FormControl) {
        ctrl.markAsTouched();
      }
      if ((ctrl instanceof FormGroup) || (ctrl instanceof FormArray)) {
        FormUtils.markAllAsTouched(ctrl);
      }
    });
  }
}
