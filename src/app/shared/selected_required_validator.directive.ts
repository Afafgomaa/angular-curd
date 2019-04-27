import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive , Input} from '@angular/core';
@Directive({
    selector:'[AppSelectedDirevtive]',
    providers:[{
      provide:NG_VALIDATORS,
      useExisting:SelectedRequiredValidatorDirective,
      multi :true
    }]

})
export class SelectedRequiredValidatorDirective implements Validator{
  @Input() AppSelectedDirevtive:string;
validate(control:AbstractControl):{[key:string]:any}|null{
  return control.value === this.AppSelectedDirevtive?{'defaultSelected': true} : null;
}


}
