import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CocktailRecipeListComponent } from './components/cocktail-recipe-list/cocktail-recipe-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, CocktailRecipeListComponent ],
  templateUrl: 'app.component.html',
})
export class AppComponent {
}
