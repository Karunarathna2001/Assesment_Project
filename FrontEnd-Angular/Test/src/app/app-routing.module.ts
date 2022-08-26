import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ForgotpasswordComponent} from "./forgotpassword/forgotpassword.component";
import {MainComponent} from "./main/main.component";
import {CreatepostComponent} from "./createpost/createpost.component";
import {EditpostComponent} from "./editpost/editpost.component";
import {ViewpostComponent} from "./viewpost/viewpost.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotpasswordComponent},
  {path: 'main', component: MainComponent},
  {path: 'create-post', component: CreatepostComponent},
  {path: 'edit-post/:Id', component: EditpostComponent},
  {path: 'view-post/:Id', component: ViewpostComponent},
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
