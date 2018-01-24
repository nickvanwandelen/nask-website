import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePracticaComponent } from './page-practica.component';

describe('PagePracticaComponent', () => {
  let component: PagePracticaComponent;
  let fixture: ComponentFixture<PagePracticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePracticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
