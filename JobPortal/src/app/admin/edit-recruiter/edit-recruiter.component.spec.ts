import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecruiterComponent } from './edit-recruiter.component';

describe('EditRecruiterComponent', () => {
  let component: EditRecruiterComponent;
  let fixture: ComponentFixture<EditRecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
