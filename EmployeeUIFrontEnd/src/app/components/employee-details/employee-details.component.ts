import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

id!:number

employee!:Employees

  constructor(private route:ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {

this.id=this.route.snapshot.params['id'];


this.employee=new Employees();
this.employeeService.getEmployeebyId(this.id).subscribe(data=>{
  this.employee=data;
  console.log(this.employee)
})

}



}
