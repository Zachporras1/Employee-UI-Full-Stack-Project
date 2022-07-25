package com.ust.employeeuibackend.controller;


import com.ust.employeeuibackend.exception.ResourceNotFoundException;
import com.ust.employeeuibackend.model.Employee;
import com.ust.employeeuibackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value="employees/")
public class EmployeeController {

    @Autowired
     private EmployeeRepository employeeRepository;


        //Get all Employees

        @GetMapping(value="")
        public List<Employee> queryEmployees(){

        return employeeRepository.findAll();

    }

    //Create Employee

    @PostMapping(value="")
    public Employee createEmployee( @RequestBody Employee emp){



        return employeeRepository.save(emp);

    }

    //Get Emp by Id


    @GetMapping(value="{id}")
    public ResponseEntity<Employee> getByID(@PathVariable("id") Long id){


        Employee employee= employeeRepository.findById(id).orElseThrow(( )-> new ResourceNotFoundException("Employee Does not exist with Id"+id));

        return ResponseEntity.ok(employee);

    }

    //Update Employee
@PutMapping(value="{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Long id, @RequestBody Employee employeeDetails){

        Employee employee= employeeRepository.findById(id).orElseThrow(( ) -> new ResourceNotFoundException("Employee does not Exist with Id:" +id));

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());


        Employee updatedEmployee= employeeRepository.save(employee);

        return ResponseEntity.ok(updatedEmployee);

    }

//Delete Employee

    @DeleteMapping(value="{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable("id") Long id){

        Employee employee= employeeRepository.findById(id).orElseThrow((  )-> new ResourceNotFoundException("Employee Does not exist with ID:" +id));

        employeeRepository.delete(employee);
        Map<String,Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);


    }

}
