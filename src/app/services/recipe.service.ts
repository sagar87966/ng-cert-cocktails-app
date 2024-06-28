import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipes } from '../shared/models/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  getAllRecipes(){
    return this.http.get<Recipes[]>("/cockails")
  }
  getRecipe(id: string){
    return this.http.get<Recipes>("/cockails/"+id)
  }
}
