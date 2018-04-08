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

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
