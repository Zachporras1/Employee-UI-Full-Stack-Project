import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!:number;
  employee!: Employees;



  constructor(private employeeService:EmployeeService, private route:ActivatedRoute,private router :Router) { }



  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];

this.employeeService.getEmployeebyId(this.id).subscribe(data=>{

  this.employee=data;

}, error=> console.log(error));


  }


onSubmit(){
  this.employeeService.updateEmployee(this.id,this.employee).subscribe(data =>{

    this.goToEmployeeList();
  })
}


goToEmployeeList(){

  this.router.navigate(['/employees'])
}


}
