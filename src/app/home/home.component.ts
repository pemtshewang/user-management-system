import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { inject } from '@angular/core';
import { EmployeeManagerService } from '../employee-manager.service';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, EmployeeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  employees!: Employee[];
  employeeService!: EmployeeManagerService;
  title: string = 'Available Users';
  constructor() {
    this.employeeService = inject(EmployeeManagerService);
  }
  ngOnInit() {
    this.employeeService.getAllUsers().subscribe((employees) => {
      this.employees = employees;
    });
  }
}
