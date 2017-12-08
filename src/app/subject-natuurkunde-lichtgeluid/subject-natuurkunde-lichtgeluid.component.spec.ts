import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectNatuurkundeLichtgeluidComponent } from './subject-natuurkunde-lichtgeluid.component';

describe('SubjectNatuurkundeLichtgeluidComponent', () => {
  let component: SubjectNatuurkundeLichtgeluidComponent;
  let fixture: ComponentFixture<SubjectNatuurkundeLichtgeluidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectNatuurkundeLichtgeluidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectNatuurkundeLichtgeluidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
