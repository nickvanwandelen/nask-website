import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectNatuurkundeElektriciteitComponent } from './subject-natuurkunde-elektriciteit.component';

describe('SubjectNatuurkundeElektriciteitComponent', () => {
  let component: SubjectNatuurkundeElektriciteitComponent;
  let fixture: ComponentFixture<SubjectNatuurkundeElektriciteitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectNatuurkundeElektriciteitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectNatuurkundeElektriciteitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
