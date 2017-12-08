import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNatuurkundeHomeComponent } from './page-natuurkunde-home.component';

describe('PageNatuurkundeHomeComponent', () => {
  let component: PageNatuurkundeHomeComponent;
  let fixture: ComponentFixture<PageNatuurkundeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNatuurkundeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNatuurkundeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
