import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employees[];

  constructor(private router:Router, private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.getEmployees();
  }

  private getEmployees(){

    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees=data;
    });
  }


  employeeDetails(id:number){

    this.router.navigate(['employee-details',id])
  }

  updateEmployee(id:number){

    this.router.navigate(['update-employee',id]);


  }


  deleteEmployee(id:number){

    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
  }

}
