import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectScheikundeDichtheidComponent } from './subject-scheikunde-dichtheid.component';

describe('SubjectScheikundeDichtheidComponent', () => {
  let component: SubjectScheikundeDichtheidComponent;
  let fixture: ComponentFixture<SubjectScheikundeDichtheidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectScheikundeDichtheidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectScheikundeDichtheidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
