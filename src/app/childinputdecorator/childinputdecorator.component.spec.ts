import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildinputdecoratorComponent } from './childinputdecorator.component';

describe('ChildinputdecoratorComponent', () => {
  let component: ChildinputdecoratorComponent;
  let fixture: ComponentFixture<ChildinputdecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildinputdecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildinputdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
