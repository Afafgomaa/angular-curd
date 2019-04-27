import { Injectable } from '@angular/core';
import { employee } from '../model/empolee.model';
import { Observable } from 'rxjs/';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  [x: string]: any;
private listEmployees:employee[] = [
  {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
  {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
  {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '',
      isActive: false,
      photoPath: 'assets/images/john.png'
    },

];


 getemployees():employee[] {
  return this.listEmployees;
}

getemployee(employeeid:number): employee {
 return this.listEmployees.find(e => e.id === employeeid );
}


addemployee(employee:employee){
  this.listEmployees.push(employee);
}
}
