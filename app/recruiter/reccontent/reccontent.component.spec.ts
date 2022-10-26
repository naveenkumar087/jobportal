import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReccontentComponent } from './reccontent.component';

describe('ReccontentComponent', () => {
  let component: ReccontentComponent;
  let fixture: ComponentFixture<ReccontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReccontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReccontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
