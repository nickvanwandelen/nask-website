import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentScheikundeDichtheidComponent } from './experiment-scheikunde-dichtheid.component';

describe('ExperimentScheikundeDichtheidComponent', () => {
  let component: ExperimentScheikundeDichtheidComponent;
  let fixture: ComponentFixture<ExperimentScheikundeDichtheidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentScheikundeDichtheidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentScheikundeDichtheidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
