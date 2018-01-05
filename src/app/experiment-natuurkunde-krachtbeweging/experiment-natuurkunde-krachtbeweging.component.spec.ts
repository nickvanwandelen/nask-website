import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentNatuurkundeKrachtbewegingComponent } from './experiment-natuurkunde-krachtbeweging.component';

describe('ExperimentNatuurkundeKrachtbewegingComponent', () => {
  let component: ExperimentNatuurkundeKrachtbewegingComponent;
  let fixture: ComponentFixture<ExperimentNatuurkundeKrachtbewegingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentNatuurkundeKrachtbewegingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentNatuurkundeKrachtbewegingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
