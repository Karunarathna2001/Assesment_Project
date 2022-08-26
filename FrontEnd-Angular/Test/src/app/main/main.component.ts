import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from "../models/post";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { PostService } from "../services/post.service";
import { ToastMsgService } from "../shared/toastmessage";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output() newUserEvent = new EventEmitter<string>();
  @Input() userName!: string;

  public displayedColumns: string[] = ['id', 'title', 'body', 'actions'];
  public dataSource = new MatTableDataSource<Post>();

  posts: Post[] = [];

  constructor(private router: Router,
    private postService: PostService,
    private toastMsgService: ToastMsgService
  ) {
  }

  ngOnInit(): void {
    this.loadAllPostList();
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(res => {
      this.posts = this.posts.filter(item => item.id !== id);
      this.router.navigateByUrl('/main');
      this.toastMsgService.showSuccessToast('Post deleted successfully!');
    }, (err) => {
      this.toastMsgService.showErrorToast(err.attribute);
    });
  }


  loadAllPostList() {
    this.postService.getAllPost().subscribe((data: Post[]) => {
      this.dataSource.data = data;
      console.log(data);
    })
  }

  createPost() {
    this.router.navigateByUrl("/create-post")
  }

  updatePost(element: any) {
    this.router.navigate([`/edit-post/${element?.id || 0}`])
  }

  viewPost(element: any) {
    this.router.navigate([`/view-post/${element?.id || 0}`])
  }
}

