import { Pipe, PipeTransform } from '@angular/core';
import { employee } from './model/empolee.model';

@Pipe({
  name: 'employeeFilterPipe'
})
export class EmployeeFilterPipePipe implements PipeTransform {

  transform(employees:employee[], serachtrem:string):employee[] {
    if(!employees || !serachtrem){
      return employees;
    }else {
       return  employees.filter( employee =>
         employee.name.toLowerCase().indexOf(serachtrem.toLowerCase()) !== -1);
    }
  }

}
