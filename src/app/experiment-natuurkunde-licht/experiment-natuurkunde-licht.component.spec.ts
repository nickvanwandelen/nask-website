import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentNatuurkundeLichtComponent } from './experiment-natuurkunde-licht.component';

describe('ExperimentNatuurkundeLichtComponent', () => {
  let component: ExperimentNatuurkundeLichtComponent;
  let fixture: ComponentFixture<ExperimentNatuurkundeLichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentNatuurkundeLichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentNatuurkundeLichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
