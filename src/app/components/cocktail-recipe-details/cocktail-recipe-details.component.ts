import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Recipes } from '../../shared/models/recipes';
import { FavoriteService } from '../../services/favorite.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-cocktail-recipe-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cocktail-recipe-details.component.html',
  styleUrl: './cocktail-recipe-details.component.scss',
})
export class CocktailRecipeDetailsComponent {
  recipeId: string | null = '';
  recipe: Recipes;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.recipeId = params.get('cocktailId');
    });
    if (typeof this.recipeId === 'string') {
      this.recipeService.getRecipe(this.recipeId).subscribe({
        next: (res) => {
          this.recipe = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      console.error('Invalid ID');
    }
  }

  toggleFavorite() {
    if (this.recipe) {
      if (this.favoriteService.isFavorite(this.recipe.id)) {
        this.favoriteService.removeFavorite(this.recipe.id);
      } else {
        this.favoriteService.addFavorite(this.recipe.id);
      }
    }
  }

  isFavorite(): boolean {
    return this.recipe
      ? this.favoriteService.isFavorite(this.recipe.id)
      : false;
  }
}
