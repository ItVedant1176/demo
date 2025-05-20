import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GethttprequestComponent } from './gethttprequest.component';

describe('GethttprequestComponent', () => {
  let component: GethttprequestComponent;
  let fixture: ComponentFixture<GethttprequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GethttprequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GethttprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
