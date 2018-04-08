import * as fromPizza from './pizzas.action';

describe('Pizza Actions', () => {
  describe('LoadPizza Actions', () => {
    describe('LoadPizzas', () => {
      it('should create action', () => {
        const action = new fromPizza.LoadPizzas();

        expect({ ...action }).toEqual({
          type: fromPizza.LOAD_PIZZA
        });
      });
    });
    describe('LoadPizzasSuccess', () => {
      it('should create action', () => {
        const payload = [
          {
            name: "Blazin' Inferno",
            toppings: [
              {
                id: 10,
                name: 'pepperoni'
              },
              {
                id: 9,
                name: 'pepper'
              },
              {
                id: 3,
                name: 'basil'
              },
              {
                id: 4,
                name: 'chili'
              },
              {
                id: 7,
                name: 'olive'
              },
              {
                id: 2,
                name: 'bacon'
              },
              {
                id: 1,
                name: 'anchovy'
              },
              {
                id: 5,
                name: 'mozzarella'
              },
              {
                id: 6,
                name: 'mushroom'
              },
              {
                id: 11,
                name: 'sweetcorn'
              },
              {
                id: 12,
                name: 'tomato'
              },
              {
                id: 8,
                name: 'onion'
              }
            ],
            id: 1
          },
          {
            name: "Seaside Surfin'",
            toppings: [
              {
                id: 6,
                name: 'mushroom'
              },
              {
                id: 7,
                name: 'olive'
              },
              {
                id: 2,
                name: 'bacon'
              },
              {
                id: 3,
                name: 'basil'
              },
              {
                id: 1,
                name: 'anchovy'
              },
              {
                id: 8,
                name: 'onion'
              },
              {
                id: 11,
                name: 'sweetcorn'
              },
              {
                id: 9,
                name: 'pepper'
              },
              {
                id: 5,
                name: 'mozzarella'
              },
              {
                id: 10,
                name: 'pepperoni'
              },
              {
                id: 12,
                name: 'tomato'
              },
              {
                id: 4,
                name: 'chili'
              }
            ],
            id: 2
          }
        ];
        const action = new fromPizza.LoadPizzasSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPizza.LOAD_PIZZA_SUCCESS,
          payload
        });
      });
    });
    describe('LoadPizzasFail', () => {
      it('should create action', () => {
        const payload = { message: 'Load Error'};
        const action = new fromPizza.LoadPizzasFail(payload);

        expect({ ...action }).toEqual({
          type: fromPizza.LOAD_PIZZA_FAIL,
          payload
        });
      });
    });
  });
});
