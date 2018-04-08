import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromTopping from '../reducers/toppings.reducer';

// selector for toppings state
export const getToppingState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

// entities selector
export const getToppingEntities = createSelector(
  getToppingState,
  fromTopping.getToppingEntitites
);

export const getAllToppings = createSelector(getToppingEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getToppingsLoading = createSelector(
  getToppingState,
  fromTopping.getToppingsLoading
);

export const getToppingsLoaded = createSelector(
  getToppingState,
  fromTopping.getToppingsLoaded
);

export const getSelectedToppings = createSelector(
  getToppingState,
  fromTopping.getSelectedToppings
);
