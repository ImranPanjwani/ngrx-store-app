import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
<<<<<<< HEAD

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import {map} from 'rxjs/operators';
import * as fromStore from '../../store';
=======
import { Router, ActivatedRoute } from '@angular/router';
>>>>>>> parent of bff50a3... Merge pull request #1 from ImranPanjwani/convert-to-store

import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services/pizzas.service';

import { Topping } from '../../models/topping.model';
import { ToppingsService } from '../../services/toppings.service';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
    <div 
      class="product-item">
      <pizza-form
        [pizza]="pizza"
        [toppings]="toppings"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise">
        </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
<<<<<<< HEAD
  pizza$: Observable<Pizza>;
  visualise: Pizza;
  toppings$ : Observable<Topping[]>;
=======
  pizza: Pizza;
  visualise: Pizza;
  toppings: Topping[];
>>>>>>> parent of bff50a3... Merge pull request #1 from ImranPanjwani/convert-to-store

  constructor(
    private pizzaService: PizzasService,
    private toppingsService: ToppingsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
<<<<<<< HEAD
    this.pizza$ = this.store.select(fromStore.getSelectedPizza);
    this.toppings$ = this.pizza$.pipe(
      map(pizza => pizza.toppings)
    )
  }

  onSelect(event: number[]) {}

  onCreate(event: Pizza) {}

  onUpdate(event: Pizza) {}
=======
    this.pizzaService.getPizzas().subscribe(pizzas => {
      const param = this.route.snapshot.params.id;
      let pizza;
      if (param === 'new') {
        pizza = {};
      } else {
        pizza = pizzas.find(pizza => pizza.id == parseInt(param, 10));
      }
      this.pizza = pizza;
      this.toppingsService.getToppings().subscribe(toppings => {
        this.toppings = toppings;
        this.onSelect(toppings.map(topping => topping.id));
      });
    });
  }

  onSelect(event: number[]) {
    let toppings;
    if (this.toppings && this.toppings.length) {
      toppings = event.map(id =>
        this.toppings.find(topping => topping.id === id)
      );
    } else {
      toppings = this.pizza.toppings;
    }
    this.visualise = { ...this.pizza, toppings };
  }

  onCreate(event: Pizza) {
    this.pizzaService.createPizza(event).subscribe(pizza => {
      this.router.navigate([`/products/${pizza.id}`]);
    });
  }

  onUpdate(event: Pizza) {
    this.pizzaService.updatePizza(event).subscribe(() => {
      this.router.navigate([`/products`]);
    });
  }
>>>>>>> parent of bff50a3... Merge pull request #1 from ImranPanjwani/convert-to-store

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
<<<<<<< HEAD
=======
      this.pizzaService.removePizza(event).subscribe(() => {
        this.router.navigate([`/products`]);
      });
>>>>>>> parent of bff50a3... Merge pull request #1 from ImranPanjwani/convert-to-store
    }
  }
}
