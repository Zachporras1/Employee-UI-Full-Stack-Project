import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/employees/';

  constructor(private httpClient: HttpClient) {}

  getEmployeeList(): Observable<Employees[]> {
    return this.httpClient.get<Employees[]>(this.baseURL);
  }

  createEmployee(employee: Employees): Observable<any> {
    return this.httpClient.post(this.baseURL, employee);
  }

  getEmployeebyId(id: number): Observable<Employees> {
    return this.httpClient.get<Employees>(`${this.baseURL}${id}`);
  }

  updateEmployee(id: number, employee: Employees): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}${id}`);
  }
}
