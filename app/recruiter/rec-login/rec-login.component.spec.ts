import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecLoginComponent } from './rec-login.component';

describe('RecLoginComponent', () => {
  let component: RecLoginComponent;
  let fixture: ComponentFixture<RecLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
