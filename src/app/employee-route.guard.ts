import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEmployessComponent } from './employees/create-employess.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRouteGuard implements CanDeactivate<CreateEmployessComponent> {
  canDeactivate(component:CreateEmployessComponent):boolean{
    if(component.createEmployee.dirty){
      return confirm('Are You Sure You Want Discard Your Changes?');
    }
    return true;
  }
}
