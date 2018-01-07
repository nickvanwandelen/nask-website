import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactHomeComponent } from './page-contact-home.component';

describe('PageContactHomeComponent', () => {
  let component: PageContactHomeComponent;
  let fixture: ComponentFixture<PageContactHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContactHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
