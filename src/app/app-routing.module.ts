import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {  path: '', redirectTo:'/loginUser', pathMatch:'full'},
  {  path: 'registerUser', component: RegisterUserComponent},
  {  path: 'loginUser', component: LoginUserComponent},
  {  path: 'home', component: HomeComponent},
  {  path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
