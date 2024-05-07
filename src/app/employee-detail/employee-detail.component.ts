import { Component, inject } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { ActivatedRoute, RouterLink} from '@angular/router';
import { Employee } from '../employee';
import { EmployeeManagerService } from '../employee-manager.service';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [MatCard, MatCardContent, CommonModule, MatButton, RouterLink],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css',
})
export class EmployeeDetailComponent {
  route!: ActivatedRoute;
  userId!: number;
  userDetail!: Employee;
  employeeService!: EmployeeManagerService;
  constructor() {
    this.route = inject(ActivatedRoute);
    this.userId = this.route.snapshot.params['id'];
    this.employeeService = inject(EmployeeManagerService);
  }
  ngOnInit() {
    this.employeeService.getUserById(this.userId).subscribe((employee) => {
      this.userDetail = employee;
    });
  }
}
