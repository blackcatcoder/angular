import { Component, OnInit } from '@angular/core';
import { Employee } from '../types/TypeUtils';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = {id: "id", name: "name"};
  employees: Employee[] = [];
  employeeName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onAddEmployee(){
    this.employee = {id: "id", name: this.employeeName};
    this.employees.push(this.employee);
    console.log(this.employees);
  }

}
