import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

// load pizza actions ( use the prefix in square brackets to seperate actions of different features )
export const LOAD_PIZZA = '[Product] Load Pizzas';
export const LOAD_PIZZA_FAIL = '[Product] Load Pizzas Fail';
export const LOAD_PIZZA_SUCCESS = '[Product] Load Pizzas Success';

// load pizza action creators
export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZA;
}
export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZA_FAIL;
  constructor(public payload: any) {}
}
export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZA_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// create pizza
export const CREATE_PIZZA = '[Products] Create Pizaa';
export const CREATE_PIZZA_FAIL = '[Products] Create Pizaa Fail';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizaa Success';

// action creators for create pizza
export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA;
  constructor(public payload: Pizza) {}
}
export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}
export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

// update pizza
export const UPDATE_PIZZA = '[Products] Update Pizza';
export const UPDATE_PIZZA_FAIL = '[Products] Update Pizza Fail';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update Pizza Success';

// action creators for update pizza
export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: Pizza) {}
}
export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}
export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

// delete pizza
export const REMOVE_PIZZA = '[Products] Remove Pizza';
export const REMOVE_PIZZA_FAIL = '[Products] Remove Pizza Fail';
export const REMOVE_PIZZA_SUCCESS = '[Products] Remove Pizza Success';

// action creators for delete pizza
export class RemovePizza implements Action {
  readonly type = REMOVE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class RemovePizzaFail implements Action {
  readonly type = REMOVE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export class RemovePizzaSuccess implements Action {
  readonly type = REMOVE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

// action types
export type PizzasAction =
  | LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaFail
  | CreatePizzaSuccess
  | UpdatePizza
  | UpdatePizzaFail
  | UpdatePizzaSuccess
  | RemovePizza
  | RemovePizzaFail
  | RemovePizzaSuccess;
