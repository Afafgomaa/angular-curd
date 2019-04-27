import { Component, OnInit } from '@angular/core';
import { employee } from '../model/empolee.model';
import { EmployeesService } from '../service/employees.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit{
employees:employee[];

filteremployee:employee[];
private _serachstring:string;
employeeTodisplay:employee;
private arrayofindex = 1;
datafromchild:string;
get serachstring()
{
  return this._serachstring;
}

set serachstring(value:string)
{
  this._serachstring = value;
  this.filteremployee = this.filterEmployeeName(value)

}
filterEmployeeName(serachtrem):employee[]{
  return  this.employees.filter( employee =>
    employee.name.toLowerCase().indexOf(serachtrem.toLowerCase()) !== -1);
}

  constructor(private employeesService:EmployeesService,
              private router:Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
this.employees = this.employeesService.getemployees();
    this.employeeTodisplay = this.employees[0];
    if(this.route.snapshot.queryParamMap.has('serchTerm'))
    {
      this.serachstring = this.route.snapshot.queryParamMap.get('serchTerm');
    }else
    {
        this.filteremployee = this.employees;
    }

  }
  nextEmployee():void{
if(this.arrayofindex <= 2){
    this.employeeTodisplay = this.employees[this.arrayofindex];
    this.arrayofindex++;
}else{
  this.employeeTodisplay = this.employees[0];
    this.arrayofindex = 1;
}

  }
  handelnotyfi(datafromoutput:string){
this.datafromchild = datafromoutput;
  }
  onclick(employeeid:number){
    this.router.navigate(['/employees/', employeeid], {
      queryParams:{serchTerm:this._serachstring , newvalue:'newvalue'}
    });
  }

}
