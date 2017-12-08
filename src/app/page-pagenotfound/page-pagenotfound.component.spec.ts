import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePagenotfoundComponent } from './page-pagenotfound.component';

describe('PagePagenotfoundComponent', () => {
  let component: PagePagenotfoundComponent;
  let fixture: ComponentFixture<PagePagenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePagenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
