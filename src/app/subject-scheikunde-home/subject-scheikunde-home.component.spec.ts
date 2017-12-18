import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectScheikundeHomeComponent } from './subject-scheikunde-home.component';

describe('SubjectScheikundeHomeComponent', () => {
  let component: SubjectScheikundeHomeComponent;
  let fixture: ComponentFixture<SubjectScheikundeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectScheikundeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectScheikundeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
