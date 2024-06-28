import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocktailRecipeListComponent } from './cocktail-recipe-list.component';


describe('CocktailRecipeListComponent', () => {
  let component: CocktailRecipeListComponent;
  let fixture: ComponentFixture<CocktailRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailRecipeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
