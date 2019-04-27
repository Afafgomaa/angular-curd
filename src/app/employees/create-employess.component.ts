import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { departments } from '../model/departments.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { employee } from '../model/empolee.model';
import { Router } from '@angular/router';
import { EmployeesService } from '../service/employees.service';


@Component({
  selector: 'app-create-employess',
  templateUrl: './create-employess.component.html',
  styleUrls: ['./create-employess.component.css']
})
export class CreateEmployessComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployee:NgForm
 bsConfig:Partial<BsDatepickerConfig>;
 dataofbirth:Date = new Date();
 colorTheme:string = 'theme-dark-blue';
gender:string='male';
contact='email';
showPerviews:Boolean = false;
employee:employee={
  id:null,
  name:null,
  gender:null,
  email:null,
  phoneNumber:null,
  contactPreference:null,
  dateOfBirth:null,
  department:'select',
  isActive:null,
  photoPath:null,
  password:null,
  ConfirmPassword:null
}
departments:departments[]=[
  {id:1 , name:'hr'},
  {id:2 , name:'account'},
  {id:3 , name:'payeroll'},
  {id:4 , name:'it'}
];

  constructor(private router:Router, private employeesService:EmployeesService) {
this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }

  ngOnInit() {
  }
  showPerview(){
    this.showPerviews = !this.showPerviews
  }
form():void{
  const newEmployee:employee = Object.assign({},this.employee);
  this.employeesService.addemployee(newEmployee);
  this.createEmployee.reset();
  this.router.navigate(['list']);
}
}
