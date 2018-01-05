import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectScheikundeFaseovergangenComponent } from './subject-scheikunde-faseovergangen.component';

describe('SubjectScheikundeFaseovergangenComponent', () => {
  let component: SubjectScheikundeFaseovergangenComponent;
  let fixture: ComponentFixture<SubjectScheikundeFaseovergangenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectScheikundeFaseovergangenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectScheikundeFaseovergangenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
