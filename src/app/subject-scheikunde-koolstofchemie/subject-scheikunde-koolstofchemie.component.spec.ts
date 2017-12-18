import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectScheikundeKoolstofchemieComponent } from './subject-scheikunde-koolstofchemie.component';

describe('SubjectScheikundeKoolstofchemieComponent', () => {
  let component: SubjectScheikundeKoolstofchemieComponent;
  let fixture: ComponentFixture<SubjectScheikundeKoolstofchemieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectScheikundeKoolstofchemieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectScheikundeKoolstofchemieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
