import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectNatuurkundeHomeComponent } from './subject-natuurkunde-home.component';

describe('SubjectNatuurkundeHomeComponent', () => {
  let component: SubjectNatuurkundeHomeComponent;
  let fixture: ComponentFixture<SubjectNatuurkundeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectNatuurkundeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectNatuurkundeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
