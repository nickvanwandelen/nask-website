import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentScheikundeKoolstofchemieComponent } from './experiment-scheikunde-koolstofchemie.component';

describe('ExperimentScheikundeKoolstofchemieComponent', () => {
  let component: ExperimentScheikundeKoolstofchemieComponent;
  let fixture: ComponentFixture<ExperimentScheikundeKoolstofchemieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentScheikundeKoolstofchemieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentScheikundeKoolstofchemieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
