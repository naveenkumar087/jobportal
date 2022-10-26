import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecProfileComponent } from './rec-profile.component';

describe('RecProfileComponent', () => {
  let component: RecProfileComponent;
  let fixture: ComponentFixture<RecProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
