import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicroutingComponent } from './basicrouting.component';

describe('BasicroutingComponent', () => {
  let component: BasicroutingComponent;
  let fixture: ComponentFixture<BasicroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicroutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
