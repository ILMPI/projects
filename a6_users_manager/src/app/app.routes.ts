import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserFormComponent } from './components/user-form/user-form.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/:_id', component: UserDetailComponent },
  { path: 'newuser', component: UserFormComponent },
  { path: 'updateuser/:_id', component: UserFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];