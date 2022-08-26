import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Post } from "../models/post";
import { PostService } from "../services/post.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastMsgService } from "../shared/toastmessage";

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {

  form!: FormGroup;
  post!: Post;
  id!: number;

  constructor(
    public postService: PostService,
    private router: Router,
    private toastMsgService: ToastMsgService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.id = params.Id;
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });

    this.postService.findPost(this.id).subscribe(res => {
      this.form.controls['title'].setValue(res.title);
      this.form.controls['body'].setValue(res.body);
    }, (err) => {
      this.toastMsgService.showErrorToast(err.attribute);
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
    this.postService.updatePost(this.id, this.post).subscribe(res => {
      this.router.navigateByUrl('/main');
      this.toastMsgService.showSuccessToast('Post updated successfully!')
    }, (err) => {
      this.toastMsgService.showErrorToast(err.attribute);
    });
  }

  Back() {
    this.router.navigateByUrl('/main');
  }

}
