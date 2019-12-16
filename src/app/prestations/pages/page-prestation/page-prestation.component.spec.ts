import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrestationComponent } from './page-prestation.component';

describe('PagePrestationComponent', () => {
  let component: PagePrestationComponent;
  let fixture: ComponentFixture<PagePrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
