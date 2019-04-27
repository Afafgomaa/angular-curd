import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { employee } from 'src/app/model/empolee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnChanges {
@Output() notify:EventEmitter<string> = new EventEmitter<string>()
private _employee:employee;
@Input() employee_id;
  private selectedpropertyid: number;
@Input()
set employee(val:employee) {
  //console.log('pervious ppp :' + (this._employee? this._employee.name : 'null'));
  //console.log('current ppp:' + val.name);
  this._employee = val;
}
get employee(){
  return this._employee;
}
  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
    this.selectedpropertyid= +this._route.snapshot.paramMap.get('id');
  }
  ngOnChanges(changes:SimpleChanges){
    //const perv = <employee>changes.employee.previousValue;
    //const current = <employee>changes.employee.currentValue;
    //console.log( 'current :' + current.name);
    //console.log('pervious :'+ (perv ? perv.name : 'null') );
    for (const properName of Object.keys(changes)){
      console.log(properName);
    }
  }
handelClick(){
  this.notify.emit(this.employee.name);
}
getnameandage(){
  return this.employee.name + ' '+ this.employee.gender;
}
}
