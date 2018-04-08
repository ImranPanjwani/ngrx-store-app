import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, filter, switchMap, take, catchError } from 'rxjs/operators';

import * as fromStore from '../store';

@Injectable()
export class PizzasGuard implements CanActivate {
  constructor(private store: Store<fromStore.ProductsState>) {}
  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      // switchMap will execute once we get loaded attribute value as true
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getPizzasLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadPizzas());
        }
      }),
      // with filter if the loaded property is false, the stream will not continue
      // so we are waiting for loaded property to become true
      filter(loaded => loaded),
      // take that one true value and then close the stream
      take(1)
    );
  }
}