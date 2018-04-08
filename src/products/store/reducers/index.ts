import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';

// export a type for the slice of state that products store is going to manage
export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromToppings.ToppingsState;
}
// actual slice of the state, i.e.pizzas
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer
};
// selector for products feature in store
export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);
