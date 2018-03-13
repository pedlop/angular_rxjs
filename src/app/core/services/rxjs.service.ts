import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { AsyncSubject } from "rxjs/AsyncSubject";
import {
  map,
  dematerialize,
  mergeMap,
  retry,
  distinctUntilChanged,
  startWith,
  pairwise,
  take,
  scan
} from "rxjs/operators";

@Injectable()
export class RxjsService {
  subjectWithOperators: Subject<any>;
  observableWithOperators: any;

  constructor() {
    this.subjectWithOperators = new Subject();
    this.observableWithOperators = this.subjectWithOperators.pipe(
      startWith({ country: "Brazil" }),
      scan((acc, curr) => Object.assign({}, acc, curr), {}),
      pairwise(),
      take(5),
      map(value => ({ previous: value[0], current: value[1] }))
    );
  }

  next(count: number) {
    // const content = Object.assign({ count: count }, { status: 'Action Response of Button' });
    // this.testingSubject.next(content);
    // // this.testingSubject.next(content); // .pipe(distinctUntilChanged()) does not print this, because it is the same object of the above
    // this.testingAsyncSubject.next(content);
    // this.testingBehaviorSubject.next(content);
    // this.testingReplaySubject.next(content);
    if (count < 3) {
      this.subjectWithOperators.next({ name: "Joe" });
    } else if (count === 3) {
      this.subjectWithOperators.next({ age: 30 });
    } else if (count === 4) {
      this.subjectWithOperators.next({ favoriteLanguage: "JavaScript" });
    } else if (count === 5) {
      // this.testingSubject.complete();
      // this.testingAsyncSubject.complete();
      // this.testingBehaviorSubject.complete();
      // this.testingReplaySubject.complete();
      this.subjectWithOperators.next({ car: "Gol" });
    } else if (count === 6) {
      this.subjectWithOperators.next({ favoriteSport: "Football" });
      this.subjectWithOperators.complete();
    }
  }
}
