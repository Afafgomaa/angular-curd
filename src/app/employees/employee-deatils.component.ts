import { Component, OnInit } from '@angular/core';
import { employee } from '../model/empolee.model';
import { EmployeesService } from '../service/employees.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-deatils',
  templateUrl: './employee-deatils.component.html',
  styleUrls: ['./employee-deatils.component.css']
})
export class EmployeeDeatilsComponent implements OnInit {
employee:employee;
id:number;
  constructor(private service:EmployeesService,
              private router:ActivatedRoute,
               private route:Router) { }

  ngOnInit() {
     this.router.paramMap.subscribe(params => {
       this.id = +params.get('id');
       this.employee = this.service.getemployee(this.id);
     });

  }
viewnextemployee(){
  if(this.id <= 2){
    this.id = this.id + 1;
  }else{
    this.id = 1;
  }

  this.route.navigate(['/employees/', this.id])
}
}
