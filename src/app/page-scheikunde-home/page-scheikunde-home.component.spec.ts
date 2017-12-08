import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageScheikundeHomeComponent } from './page-scheikunde-home.component';

describe('PageScheikundeHomeComponent', () => {
  let component: PageScheikundeHomeComponent;
  let fixture: ComponentFixture<PageScheikundeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageScheikundeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageScheikundeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
