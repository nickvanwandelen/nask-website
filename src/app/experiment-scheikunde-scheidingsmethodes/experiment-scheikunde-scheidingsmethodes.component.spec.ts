import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentScheikundeScheidingsmethodesComponent } from './experiment-scheikunde-scheidingsmethodes.component';

describe('ExperimentScheikundeScheidingsmethodesComponent', () => {
  let component: ExperimentScheikundeScheidingsmethodesComponent;
  let fixture: ComponentFixture<ExperimentScheikundeScheidingsmethodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentScheikundeScheidingsmethodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentScheikundeScheidingsmethodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
