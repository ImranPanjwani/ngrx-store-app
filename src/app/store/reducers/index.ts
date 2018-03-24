import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';

import * as fromRouter from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}
export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducer: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer
};

// selector that can be used in other module to access this reducer
export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

// setting up custom serializer to extract only the required information from router navigation action
export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(router: RouterStateSnapshot) {
    // extracting required data from router state tree ( router itself is a state tree in angular )
    const { url } = router;
    const { queryParams } = router.root;
    // traversing till the end of the tree to obtain params
    let state: ActivatedRouteSnapshot = router.root;
    while(state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params};
  }
}