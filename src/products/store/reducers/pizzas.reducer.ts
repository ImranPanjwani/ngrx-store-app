import { Pizza } from '../../models/pizza.model';
import * as fromPizza from '../actions/pizzas.action';

export interface PizzaState {
  entities: { [id: number]: Pizza };
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromPizza.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizza.LOAD_PIZZA: {
      return {
        ...state,
        loading: true
      };
    }
    case fromPizza.LOAD_PIZZA_SUCCESS: {
      const pizzas = action.payload;
      // optimizing the data structure to improve scalability
      const entities = pizzas.reduce(
        (entities: { [id: number]: Pizza }, pizza: Pizza) => {
          return {
            ...entities,
            [pizza.id]: pizza
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
    case fromPizza.LOAD_PIZZA_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case fromPizza.UPDATE_PIZZA_SUCCESS:
    case fromPizza.CREATE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const entities = {
        ...state.entities,
        [pizza.id]: pizza
      };
      return {
        ...state,
        entities
      }
    }
    case fromPizza.REMOVE_PIZZA: {
      const pizza = action.payload;
      const { [pizza.id]: removed, ...entities } = state.entities;
      return {
        ...state,
        entities
      }
    }
  }
  return state;
}

// Selector functions
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasEntities = (state: PizzaState) => state.entities;
