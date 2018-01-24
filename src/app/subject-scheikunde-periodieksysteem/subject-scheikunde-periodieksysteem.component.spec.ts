import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectScheikundePeriodieksysteemComponent } from './subject-scheikunde-periodieksysteem.component';

describe('SubjectScheikundePeriodieksysteemComponent', () => {
  let component: SubjectScheikundePeriodieksysteemComponent;
  let fixture: ComponentFixture<SubjectScheikundePeriodieksysteemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectScheikundePeriodieksysteemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectScheikundePeriodieksysteemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
