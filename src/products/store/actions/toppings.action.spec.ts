import * as fromToppings from './toppings.action';

describe('Toppings Action', () => {
  describe('LoadToppingActions', () => {
    describe('LoadTopping', () => {
      it('should create action', () => {
        const action = new fromToppings.LoadToppings();
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPING
        });
      });
    });
    describe('LoadToppingSuccess', () => {
      it('should create action', () => {
        const payload = [
          {
            id: 1,
            name: 'anchovy'
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
            id: 4,
            name: 'chili'
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
            id: 7,
            name: 'olive'
          },
          {
            id: 8,
            name: 'onion'
          },
          {
            id: 9,
            name: 'pepper'
          },
          {
            id: 10,
            name: 'pepperoni'
          },
          {
            id: 11,
            name: 'sweetcorn'
          },
          {
            id: 12,
            name: 'tomato'
          }
        ];
        const action = new fromToppings.LoadToppingsSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPING_SUCCESS,
          payload
        });
      });
    });
    describe('LoadToppingFail', () => {
      it('should create action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromToppings.LoadToppingsFail(payload);
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPING_FAIL,
          payload
        });
      });
    });
  });
  describe('VisualizeToppings', () => {
    it('should create action', () => {
      const payload = [1, 2, 3, 4];
      const action = new fromToppings.VisualiseToppings(payload);
      expect({ ...action }).toEqual({
        type: fromToppings.VISUALISE_TOPPINGS,
        payload
      });
    });
  });
});
