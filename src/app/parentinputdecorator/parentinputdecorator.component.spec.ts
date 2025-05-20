import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentinputdecoratorComponent } from './parentinputdecorator.component';

describe('ParentinputdecoratorComponent', () => {
  let component: ParentinputdecoratorComponent;
  let fixture: ComponentFixture<ParentinputdecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentinputdecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentinputdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
