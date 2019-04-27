import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appConfirm]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:ConfirmDirective,
    multi:true

  }]
})
export class ConfirmDirective implements Validator {
  validate(passwordGroup:AbstractControl): {[key:string]:any}|null{
    const passwordField = passwordGroup.get('password');
    const confirmPasswordField = passwordGroup.get('cpassword');
    if(passwordField && confirmPasswordField && confirmPasswordField.value !== passwordField.value){
      return {'notEqual':true}
    }
    return null
  }

  constructor() { }

}
