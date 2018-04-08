import * as fromToppings from '../actions/toppings.action';
import { Topping } from '../../models/topping.model';

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loading: boolean;
  loaded: boolean;
  selectedToppings: number[];
}

export const initialState: ToppingsState = {
  entities: {},
  loading: false,
  loaded: false,
  selectedToppings: []
};

export function reducer(
  state = initialState,
  action: fromToppings.ToppingsActions
): ToppingsState {
  switch (action.type) {
    case fromToppings.LOAD_TOPPING: {
      return {
        ...state,
        loading: true
      };
    }
    case fromToppings.LOAD_TOPPING_SUCCESS: {
      const toppings = action.payload;
      const entities = toppings.reduce(
        (entities, topping) => {
          return {
            ...entities,
            [topping.id]: topping
          };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
    case fromToppings.LOAD_TOPPING_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromToppings.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;
      return {
        ...state,
        selectedToppings
      };
    }
  }
  return state;
}

// selector functions
export const getToppingEntitites = (state: ToppingsState) => state.entities;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getSelectedToppings = (state: ToppingsState) =>
  state.selectedToppings;
