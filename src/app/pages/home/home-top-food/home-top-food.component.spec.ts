import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopFoodComponent } from './home-top-food.component';

describe('HomeTopFoodComponent', () => {
  let component: HomeTopFoodComponent;
  let fixture: ComponentFixture<HomeTopFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
