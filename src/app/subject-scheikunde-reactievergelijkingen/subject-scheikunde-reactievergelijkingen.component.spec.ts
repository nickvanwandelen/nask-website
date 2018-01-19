import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectScheikundeReactievergelijkingenComponent } from './subject-scheikunde-reactievergelijkingen.component';

describe('SubjectScheikundeReactievergelijkingenComponent', () => {
  let component: SubjectScheikundeReactievergelijkingenComponent;
  let fixture: ComponentFixture<SubjectScheikundeReactievergelijkingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectScheikundeReactievergelijkingenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectScheikundeReactievergelijkingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
