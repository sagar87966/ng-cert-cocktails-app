import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Recipes } from '../../shared/models/recipes';
import { FavoriteService } from '../../services/favorite.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-cocktail-recipe-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cocktail-recipe-list.component.html',
  styleUrl: './cocktail-recipe-list.component.scss',
})
export class CocktailRecipeListComponent {
  allList: Recipes[] = [];
  recipeList: Recipes[] = [];

  searchControl: FormControl = new FormControl('');

  constructor(
    private recipeService: RecipeService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    if (this.recipeList.length == 0) {
      this.recipeService.getAllRecipes().subscribe({
        next: (res) => {
          this.allList = this.recipeList = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
    this.searchControl.valueChanges.subscribe((searchTerm) => {
      if (searchTerm) {
        this.recipeList = this.allList.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        this.recipeList = [...this.allList];
      }
    });
  }

  toggleFavorite(cocktailId: string) {
    if (this.favoriteService.isFavorite(cocktailId)) {
      this.favoriteService.removeFavorite(cocktailId);
    } else {
      this.favoriteService.addFavorite(cocktailId);
    }
  }

  isFavorite(cocktailId: string): boolean {
    return this.favoriteService.isFavorite(cocktailId);
  }
}
