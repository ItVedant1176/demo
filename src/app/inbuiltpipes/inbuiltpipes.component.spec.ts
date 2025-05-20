import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltpipesComponent } from './inbuiltpipes.component';

describe('InbuiltpipesComponent', () => {
  let component: InbuiltpipesComponent;
  let fixture: ComponentFixture<InbuiltpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InbuiltpipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InbuiltpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
