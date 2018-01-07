import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentNatuurkundeElektriciteitComponent } from './experiment-natuurkunde-elektriciteit.component';

describe('ExperimentNatuurkundeElektriciteitComponent', () => {
  let component: ExperimentNatuurkundeElektriciteitComponent;
  let fixture: ComponentFixture<ExperimentNatuurkundeElektriciteitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentNatuurkundeElektriciteitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentNatuurkundeElektriciteitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
