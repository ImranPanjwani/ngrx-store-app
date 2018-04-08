import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { switchMap, take, tap, filter, map } from 'rxjs/operators';
import { Pizza } from '../models/pizza.model';

import * as fromStore from '../store';

@Injectable()
export class PizzaExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.ProductsState>) {}
  canActivate(route: ActivatedRouteSnapshot) {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = route.params.pizzaId;
        return this.hasPizza(id);
      })
    );
  }
  hasPizza(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getAllPizzasEntities)
      .pipe(
        map((entities: { [id: number]: Pizza }) => !!entities[id]),
        take(1)
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
