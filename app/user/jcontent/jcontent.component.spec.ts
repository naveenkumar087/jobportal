import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JcontentComponent } from './jcontent.component';

describe('JcontentComponent', () => {
  let component: JcontentComponent;
  let fixture: ComponentFixture<JcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
