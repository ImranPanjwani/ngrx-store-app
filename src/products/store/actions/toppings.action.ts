import { Action } from '@ngrx/store';

import { Topping } from '../../models/topping.model';

// actions
export const LOAD_TOPPING = '[Products] Load Toppings';
export const LOAD_TOPPING_SUCCESS = '[Products] Load Toppings Success';
export const LOAD_TOPPING_FAIL = '[Products] Load Toppings Fail';
export const VISUALISE_TOPPINGS = '[Products] Visualise Toppings';

// action creators
export class LoadToppings implements Action {
  readonly type = LOAD_TOPPING;
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPING_SUCCESS;
  constructor(public payload: Topping[]) {}
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPING_FAIL;
  constructor(public payload: any) {}
}

export class VisualiseToppings implements Action {
  readonly type = VISUALISE_TOPPINGS;
  constructor(public payload: number[]) {}
}
// action types
export type ToppingsActions =
  | LoadToppings
  | LoadToppingsSuccess
  | LoadToppingsFail
  | VisualiseToppings;
