import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientComponent } from './page-client-list.component';

describe('PageClientListComponent', () => {
  let component: PageClientComponent;
  let fixture: ComponentFixture<PageClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
