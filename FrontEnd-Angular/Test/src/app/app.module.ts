import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatError, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {MenuComponent} from './menu/menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainComponent} from './main/main.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CreatepostComponent} from './createpost/createpost.component';
import {EditpostComponent} from './editpost/editpost.component';
import {ViewpostComponent} from './viewpost/viewpost.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    MenuComponent,
    MainComponent,
    CreatepostComponent,
    EditpostComponent,
    ViewpostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
