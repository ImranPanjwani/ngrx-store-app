import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

<<<<<<< HEAD
import { reducer, CustomSerializer } from './store';

=======
>>>>>>> parent of bff50a3... Merge pull request #1 from ImranPanjwani/convert-to-store
// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

// bootstrap
import { AppComponent } from './containers/app/app.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    loadChildren: '../products/products.module#ProductsModule',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
<<<<<<< HEAD
    StoreModule.forRoot(reducer , { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
=======
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
>>>>>>> parent of bff50a3... Merge pull request #1 from ImranPanjwani/convert-to-store
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
