import { AbstractControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

export function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }
  return { doesNotContainQuestionMark: true };
}

export function emailIsUnique(control: AbstractControl) {
  if (control.value === 'test@example.com') {
    return of({ emailIsNotUnique: true });
  } else {
    return of(null);
  }
}

export function passwordValidator(
  controlName1: string,
  controlName2: string
): ValidatorFn {
  return (comparison: AbstractControl) => {
    const passwordValue = comparison.get(controlName1)?.value;
    const confirmedPasswordValue = comparison.get(controlName2)?.value;

    if (passwordValue === confirmedPasswordValue) {
      return null;
    }
    return { notEqual: true };
  };
}
