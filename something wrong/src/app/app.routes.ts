import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FormComponent } from './components/form/form.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/:_id', component: UserDetailComponent },
  { path: 'newuser', component: FormComponent },
  { path: 'updateuser/:_id', component: FormComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];