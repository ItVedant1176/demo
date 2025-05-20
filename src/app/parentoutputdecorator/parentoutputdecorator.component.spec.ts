import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentoutputdecoratorComponent } from './parentoutputdecorator.component';

describe('ParentoutputdecoratorComponent', () => {
  let component: ParentoutputdecoratorComponent;
  let fixture: ComponentFixture<ParentoutputdecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentoutputdecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentoutputdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
