import { Component, Input } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardActions,
} from '@angular/material/card';
import { Employee } from '../employee';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [MatCard, MatCardContent,MatCardActions,MatButton,RouterLink],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css',
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
}
