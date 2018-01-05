import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageToetsenGeneratedComponent } from './page-toetsen-generated.component';

describe('PageToetsenGeneratedComponent', () => {
  let component: PageToetsenGeneratedComponent;
  let fixture: ComponentFixture<PageToetsenGeneratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageToetsenGeneratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageToetsenGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
