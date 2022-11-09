import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalCustomComponent } from './paypal-custom.component';

describe('PaypalCustomComponent', () => {
  let component: PaypalCustomComponent;
  let fixture: ComponentFixture<PaypalCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaypalCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
