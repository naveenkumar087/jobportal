import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSelectorComponent } from './l-selector.component';

describe('LSelectorComponent', () => {
  let component: LSelectorComponent;
  let fixture: ComponentFixture<LSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
