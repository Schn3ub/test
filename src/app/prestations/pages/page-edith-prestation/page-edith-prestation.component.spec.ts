import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEdithPrestationComponent } from './page-edith-prestation.component';

describe('PageEdithPrestationComponent', () => {
  let component: PageEdithPrestationComponent;
  let fixture: ComponentFixture<PageEdithPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEdithPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEdithPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
