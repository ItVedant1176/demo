import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExaampleComponent } from './service-exaample.component';

describe('ServiceExaampleComponent', () => {
  let component: ServiceExaampleComponent;
  let fixture: ComponentFixture<ServiceExaampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceExaampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceExaampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
