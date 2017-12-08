import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectNatuurkundeKrachtbewegingComponent } from './subject-natuurkunde-krachtbeweging.component';

describe('SubjectNatuurkundeKrachtbewegingComponent', () => {
  let component: SubjectNatuurkundeKrachtbewegingComponent;
  let fixture: ComponentFixture<SubjectNatuurkundeKrachtbewegingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectNatuurkundeKrachtbewegingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectNatuurkundeKrachtbewegingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
