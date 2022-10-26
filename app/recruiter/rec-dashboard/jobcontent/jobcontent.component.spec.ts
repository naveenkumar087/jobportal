import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcontentComponent } from './jobcontent.component';

describe('JobcontentComponent', () => {
  let component: JobcontentComponent;
  let fixture: ComponentFixture<JobcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
