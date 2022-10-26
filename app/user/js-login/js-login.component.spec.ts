import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsLoginComponent } from './js-login.component';

describe('JsLoginComponent', () => {
  let component: JsLoginComponent;
  let fixture: ComponentFixture<JsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
