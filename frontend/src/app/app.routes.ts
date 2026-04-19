import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { Employees } from './features/employees/employees';
import { AdminLayoutComponent } from './features/layout/admin-layout.component';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'admin', redirectTo: 'admin/employees', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'employees', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'employees', component: Employees },
      { path: '**', redirectTo: 'employees' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
