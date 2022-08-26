import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastMsgService } from "../shared/toastmessage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  @Output() newUserEvent = new EventEmitter<string>();
  signInForm!: FormGroup;

  constructor(private router: Router,
    private toastMsgService: ToastMsgService
  ) {
    this.signInForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit() {
  }

  submit() {
    if (!this.signInForm.valid) return;
    this.username = this.signInForm.get('username')?.value
    this.addUser(this.username);
    this.router.navigateByUrl('/main');
    this.toastMsgService.showSuccessToast("Hello! " + this.username);
  }

  addUser(value: string) {
    this.newUserEvent.emit(value);
  }

}
