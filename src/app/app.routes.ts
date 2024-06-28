import { Routes } from '@angular/router';
import { CocktailRecipeDetailsComponent } from './components/cocktail-recipe-details/cocktail-recipe-details.component';
import { CocktailRecipeListComponent } from './components/cocktail-recipe-list/cocktail-recipe-list.component';

export const routes: Routes = [
  { path: '', component: CocktailRecipeListComponent, pathMatch: 'full' },
  { path: 'cocktails/:cocktailId', component: CocktailRecipeDetailsComponent },
];
