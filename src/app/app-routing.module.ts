import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './employees/list-employee.component';
import { CreateEmployessComponent } from './employees/create-employess.component';
import { EmployeeRouteGuard } from './employee-route.guard';
import { EmployeeDeatilsComponent } from './employees/employee-deatils.component';

const routes: Routes = [
  {path: 'list', component:ListEmployeeComponent},
  {path: 'create', component:CreateEmployessComponent, canDeactivate:[EmployeeRouteGuard]},
  {path: 'employees/:id', component:EmployeeDeatilsComponent},
  {path: '', redirectTo:'/list' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
