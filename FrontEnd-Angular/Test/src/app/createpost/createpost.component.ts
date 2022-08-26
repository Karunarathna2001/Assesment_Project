import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../services/post.service";
import {Router} from "@angular/router";
import {Post} from "../models/post";
import {ToastMsgService} from "../shared/toastmessage";

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  form!: FormGroup;
  post!: Post;

  constructor(
    public postService: PostService,
    private router: Router,
    private toastMsgService: ToastMsgService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (!this.form.valid) return;
    this.post = {
      title: this.form.value.title,
      body: this.form.value.body
    }
    this.postService.createPost(this.post).subscribe(res => {
      this.router.navigateByUrl('/main');
      this.toastMsgService.showSuccessToast('Post created successfully!')
    }, (err) => {
      this.toastMsgService.showErrorToast(err.attribute);
    });
  }

  Back() {
    this.router.navigateByUrl('/main');
  }
}
