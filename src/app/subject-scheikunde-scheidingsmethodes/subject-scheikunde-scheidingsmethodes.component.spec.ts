import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectScheikundeScheidingsmethodesComponent } from './subject-scheikunde-scheidingsmethodes.component';

describe('SubjectScheikundeScheidingsmethodesComponent', () => {
  let component: SubjectScheikundeScheidingsmethodesComponent;
  let fixture: ComponentFixture<SubjectScheikundeScheidingsmethodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectScheikundeScheidingsmethodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectScheikundeScheidingsmethodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
