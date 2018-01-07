import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentScheikundeFaseovergangenComponent } from './experiment-scheikunde-faseovergangen.component';

describe('ExperimentScheikundeFaseovergangenComponent', () => {
  let component: ExperimentScheikundeFaseovergangenComponent;
  let fixture: ComponentFixture<ExperimentScheikundeFaseovergangenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentScheikundeFaseovergangenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentScheikundeFaseovergangenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
