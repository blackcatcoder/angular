import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'http-demo';
  loadedPosts: Post[] = [];
  isFetching = false;
  error: string | null = null;
  private errorSub: Subscription | null = null;

  constructor(private http: HttpClient, private postService: PostService ) {}

  ngOnInit() {
    this.onFetchPosts();

    this.errorSub = this.postService.error.subscribe(error => {
      this.error = error;
      this.isFetching = false;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.postService.createAndStorePost(postData);
    // this.http.post('http://localhost:8080', postData).subscribe(response => {
    //   console.log(response);
    // });
  }

  onFetchPosts() {
    this.isFetching = true;

    // Send Http request
    // this.http.get('http://localhost:8080')
    // .pipe(map((response) => {
    //   const posts: Post[] = [];
    //   if(response instanceof Array){
    //   for(const key in response){
    //     if(response.hasOwnProperty(key)){
    //       posts.push({id: key, ...response[key]});
    //     }
    //   }
    // }
    // return posts
    // }))

    this.postService.fetPosts()
    .subscribe(response => {
      console.log(response);
      this.loadedPosts = response;
      this.isFetching = false;
    }, error => {
      this.error = error.message;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  ngOnDestroy(): void {
      this.errorSub?.unsubscribe();
  }

  onHandleError(){
    this.error = null;
  }
}

interface Example{
  title: string;
  content: string;
}