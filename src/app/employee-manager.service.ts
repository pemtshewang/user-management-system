import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeManagerService {
  baseUrl!: string;
  constructor(private http:HttpClient) {
    this.baseUrl = 'http://localhost:3000/employees';
  }
  getAllUsers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}?_start=10&_limit=20`);
  }
  getUserById(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }
}
