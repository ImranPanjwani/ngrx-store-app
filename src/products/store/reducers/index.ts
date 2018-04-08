import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';

// export a type for the slice of state that products store is going to manage
export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}
// actual slice of the state, i.e.pizzas
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

// selector - products feature in store
export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);
