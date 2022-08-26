import { Component, OnInit } from '@angular/core';
import { PostService } from "../services/post.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastMsgService } from "../shared/toastmessage";

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  id: any;
  title: any;
  body: any;

  constructor(public postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private toastMsgService: ToastMsgService,
  ) {
    this.route.params.subscribe(params => {
      this.id = params.Id;
    });
  }

  ngOnInit(): void {
    this.postService.findPost(this.id).subscribe(res => {
      this.id = res.id;
      this.title = res.title;
      this.body = res.body;
    }, (err) => {
      this.toastMsgService.showErrorToast(err.attribute);
    });
  }


  Back() {
    this.router.navigateByUrl('/main');
  }
}
