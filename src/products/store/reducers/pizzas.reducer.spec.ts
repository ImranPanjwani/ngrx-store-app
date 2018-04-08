import * as fromPizza from './pizzas.reducer';
import * as fromAction from '../actions';

import { Pizza } from '../../models/pizza.model';

describe('Pizza Reducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromPizza;
      const action = {} as any;
      const state = fromPizza.reducer(undefined, action);
      expect(state).toEqual(initialState);
    });
  });
  describe('LOAD_PIZZA action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromPizza;
      const action = new fromAction.LoadPizzas();
      const state = fromPizza.reducer(initialState, action);
      expect(state.entities).toEqual({});
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });
  describe('LOAD_PIZZA_SUCCESS action', () => {
    it('should convert array to entities', () => {
      const pizzas: Pizza[] = [
        { id: 1, name: 'Pizza #1' },
        { id: 2, name: 'Pizza #2' }
      ];
      const entities = {
        1: pizzas[0],
        2: pizzas[1]
      };
      const { initialState } = fromPizza;
      const action = new fromAction.LoadPizzasSuccess(pizzas);
      const state = fromPizza.reducer(initialState, action);
      expect(state.entities).toEqual(entities);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
    });
  });
  describe('LOAD_PIZZA_FAIL action', () => {
    it('should not update the state', () => {
        const payload = {message: 'Load Error'};
      const { initialState } = fromPizza;
      const action = new fromAction.LoadPizzasFail(payload);
      const state = fromPizza.reducer(initialState, action);
      expect(state.entities).toEqual({});
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(false);
    });
  });
  
});
