import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY_OBSERVER } from 'rxjs/internal/Subscriber';
import { Employees } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee :Employees=new Employees();




  constructor(private employeeService:EmployeeService, private router :Router) { }

  ngOnInit(): void {

  }

  saveEmployee(){

    this.employeeService.createEmployee(this.employee).subscribe(data =>{


      console.log(data)
      this.goToEmployeeList();
      
    }, error=>console.log(error))


  }

  goToEmployeeList(){

    this.router.navigate(['/employees'])
  }

  onSubmit(){
    console.log(this.employee)
    this.saveEmployee();
  }

}
