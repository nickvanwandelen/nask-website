import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageToetsenHomeComponent } from './page-toetsen-home.component';

describe('PageToetsenHomeComponent', () => {
  let component: PageToetsenHomeComponent;
  let fixture: ComponentFixture<PageToetsenHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageToetsenHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageToetsenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
