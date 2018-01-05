import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentNatuurkundeGeluidComponent } from './experiment-natuurkunde-geluid.component';

describe('ExperimentNatuurkundeGeluidComponent', () => {
  let component: ExperimentNatuurkundeGeluidComponent;
  let fixture: ComponentFixture<ExperimentNatuurkundeGeluidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentNatuurkundeGeluidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentNatuurkundeGeluidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
