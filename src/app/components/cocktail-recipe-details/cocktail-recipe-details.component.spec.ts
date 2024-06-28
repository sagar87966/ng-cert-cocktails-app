import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocktailRecipeDetailsComponent } from './cocktail-recipe-details.component';

describe('CocktailRecipeDetailsComponent', () => {
  let component: CocktailRecipeDetailsComponent;
  let fixture: ComponentFixture<CocktailRecipeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailRecipeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailRecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
