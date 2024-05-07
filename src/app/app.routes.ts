import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const routes: Routes = [
  {
    title: 'home',
    path: '',
    component: HomeComponent,
  },
  {
    title: 'employee',
    path: 'employee/:id',
    component: EmployeeDetailComponent,
  },
];
