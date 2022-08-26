import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Post } from "../models/post";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "https://localhost:7105/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  getAllPost(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/post')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  createPost(post: Post): Observable<any> {
    return this.httpClient.post(this.apiURL + '/post', JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  findPost(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/post/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updatePost(id: number, post: Post): Observable<any> {
    return this.httpClient.patch(this.apiURL + '/post/' + id, JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  deletePost(id: number) {
    return this.httpClient.delete(this.apiURL + '/post/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
