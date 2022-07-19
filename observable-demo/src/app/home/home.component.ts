import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubcription: Subscription = new Subscription;
  private customObsSubcription: Subscription = new Subscription;

  constructor() { }

  ngOnInit(): void {

    // 1: cal observable from library
    // this.firstObsSubcription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // 2: create your own observable
    const customInterval = Observable.create(
      (observer: { next: (arg0: number) => void; complete: () => void; error: (arg0: Error) => void; }) => {

        let count = 0;

        setInterval(() => {
          observer.next(count);

          if(count === 5){
            observer.complete();
          }

          if(count > 3){
            observer.error(new Error("count is greater than 3"));
          }

          count++;
        }, 1000);
      }
    );

    // customInterval.pipe(map(
    //   (data: number) => {
    //     return 'Round: '+(data+1);
    //   }
    // ));

    this.customObsSubcription = customInterval.pipe(
      filter(
        (data: number) => {
          return data > 1
        }
      ),
      map(
      (data: number) => {
        return 'Round: '+(data+1);
      }
    )).subscribe((count: any) => {
      console.log(count);
    }, (error: any) => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('complete');
      alert('complete')
    });

  }

  ngOnDestroy(): void {
      this.firstObsSubcription.unsubscribe();
      this.customObsSubcription.unsubscribe();
  }

}
