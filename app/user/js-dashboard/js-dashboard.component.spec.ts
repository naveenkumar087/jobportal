import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDashboardComponent } from './js-dashboard.component';

describe('JsDashboardComponent', () => {
  let component: JsDashboardComponent;
  let fixture: ComponentFixture<JsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
