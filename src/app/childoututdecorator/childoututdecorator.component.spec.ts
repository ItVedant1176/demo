import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildoututdecoratorComponent } from './childoututdecorator.component';

describe('ChildoututdecoratorComponent', () => {
  let component: ChildoututdecoratorComponent;
  let fixture: ComponentFixture<ChildoututdecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildoututdecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildoututdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
