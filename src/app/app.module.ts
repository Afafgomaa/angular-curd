import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './employees/list-employee.component';
import { CreateEmployessComponent } from './employees/create-employess.component';
import { SelectDirective } from './select.directive';
import {SelectedRequiredValidatorDirective} from './shared/selected_required_validator.directive';
import { ConfirmDirective } from './shared/confirm.directive';
import { DisplayComponent } from './employees/display/display.component';
import { EmployeeRouteGuard } from './employee-route.guard';
import { EmployeeDeatilsComponent } from './employees/employee-deatils.component';
import { EmployeeFilterPipePipe } from './employee-filter-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployessComponent,
    SelectDirective,
    SelectedRequiredValidatorDirective,
    ConfirmDirective,
    DisplayComponent,
    EmployeeDeatilsComponent,
    EmployeeFilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
