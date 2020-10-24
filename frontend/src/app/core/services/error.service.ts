import {ValidationError} from '@@shared/models/validation-error';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ErrorService {

  getErrorMessage(error: ValidationError): string {
    switch (error.type) {
      case 'required':
        return 'Field is required';
      case 'minlength':
        return `Minimum ${error.params.requiredLength} characters are needed`;
      case 'min':
        return `Value should be higher then 0`;
      default:
        throw new Error(`Unsupported error type: ${error.type}`);
    }
  }
}

