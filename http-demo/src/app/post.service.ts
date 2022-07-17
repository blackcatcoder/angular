import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Subject, tap, throwError } from 'rxjs';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostService{

    error = new Subject<string>();

    constructor(private http: HttpClient){}

    createAndStorePost(postData: Post){
        this.http.post('http://localhost:8080', postData, {
          observe: 'response'
        }).subscribe(response => {
        console.log(response);
    }, error => {
        this.error.next(error.message);
    });
    }

    fetPosts(){
        // Send Http request
        return this.http.get('http://localhost:8080',
        {
          headers: new HttpHeaders({
            'custom-header': 'hello'
          }),
          params: new HttpParams().set('print', 'pretty')
        }
        )
        .pipe(map((response) => {
          const posts: Post[] = [];
          if(response instanceof Array){
          for(const key in response){
            if(response.hasOwnProperty(key)){
              posts.push({id: key, ...response[key]});
            }
          }
        }
        return posts
        }),
        catchError(errorRes => throwError(errorRes))
        );
    }

    deletePosts(){
      return this.http.delete('http://localhost:8080', {
        observe: 'events',
        responseType: 'json'
      }).pipe(tap(event => {
        console.log(event);
        if(event.type === HttpEventType.Sent){
          console.log('sending');
        }
        if(event.type === HttpEventType.Response){
          console.log('response')
          console.log(event.body);
        }
      }))
    }
}