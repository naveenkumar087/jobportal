import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecDashboardComponent } from './rec-dashboard.component';

describe('RecDashboardComponent', () => {
  let component: RecDashboardComponent;
  let fixture: ComponentFixture<RecDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
