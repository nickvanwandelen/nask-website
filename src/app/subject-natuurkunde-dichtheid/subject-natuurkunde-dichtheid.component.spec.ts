import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectNatuurkundeDichtheidComponent } from './subject-natuurkunde-dichtheid.component';

describe('SubjectNatuurkundeDichtheidComponent', () => {
  let component: SubjectNatuurkundeDichtheidComponent;
  let fixture: ComponentFixture<SubjectNatuurkundeDichtheidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectNatuurkundeDichtheidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectNatuurkundeDichtheidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
